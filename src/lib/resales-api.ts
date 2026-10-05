import { Property, PropertyType, PropertyStatus } from '@/types/property';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';

export interface ResalesApiConfig {
  apiKey?: string; // p2
  agencyId?: string; // p1
  filterId?: string;
  baseUrl?: string;
  sandbox?: boolean;
}

export interface ResalesSearchFilter {
  location?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  page?: number;
  pageSize?: number;
}

/**
 * Resales Online Spanish MLS API Client
 * Official standard used by Costa Cálida / Costa del Sol property portals.
 */
export class ResalesOnlineClient {
  private config: ResalesApiConfig;

  constructor(config?: ResalesApiConfig) {
    this.config = {
      apiKey: config?.apiKey || process.env.RESALES_ONLINE_API_KEY || '',
      agencyId: config?.agencyId || process.env.RESALES_ONLINE_AGENCY_ID || '',
      filterId: config?.filterId || process.env.RESALES_ONLINE_FILTER_ID || '1',
      baseUrl: config?.baseUrl || 'https://webapi.resales-online.com/V6/SearchProperties',
      sandbox: config?.sandbox ?? false,
    };
  }

  /**
   * Check whether live Resales API credentials are fully configured
   */
  public isConfigured(): boolean {
    return Boolean(this.config.apiKey && this.config.agencyId);
  }

  /**
   * Fetch properties from Resales Online API (or local database fallback)
   */
  public async searchProperties(filters?: ResalesSearchFilter): Promise<{
    properties: Property[];
    totalCount: number;
    isLiveApi: boolean;
  }> {
    // If credentials are provided, attempt live fetch from Resales Online API
    if (this.isConfigured()) {
      try {
        const queryParams = new URLSearchParams({
          p1: this.config.agencyId!,
          p2: this.config.apiKey!,
          p_agency_filterid: this.config.filterId!,
          p_sandbox: this.config.sandbox ? '1' : '0',
          P_MustHaveCountry: 'Spain',
          P_Area: filters?.location || 'Murcia',
          P_PageSize: String(filters?.pageSize || 24),
          P_PageNo: String(filters?.page || 1),
        });

        if (filters?.minPrice) queryParams.set('P_Min', String(filters.minPrice));
        if (filters?.maxPrice) queryParams.set('P_Max', String(filters.maxPrice));
        if (filters?.bedrooms) queryParams.set('P_Beds', String(filters.bedrooms));

        const response = await fetch(`${this.config.baseUrl}?${queryParams.toString()}`, {
          headers: {
            Accept: 'application/json',
          },
          next: { revalidate: 3600 }, // Cache on edge for 1 hour
        });

        if (response.ok) {
          const data = await response.json();
          const mapped = this.mapResalesToInternal(data);
          return {
            properties: mapped,
            totalCount: mapped.length,
            isLiveApi: true,
          };
        }
      } catch (err) {
        console.warn('Resales Online API request failed, falling back to local dataset:', err);
      }
    }

    // Fallback: Return formatted properties from seeded Murcia catalog
    let results = [...PROPERTIES_DATA];

    if (filters?.location) {
      results = results.filter((p) =>
        p.resortName.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    if (filters?.minPrice) {
      results = results.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters?.maxPrice) {
      results = results.filter((p) => p.price <= filters.maxPrice!);
    }
    if (filters?.bedrooms) {
      results = results.filter((p) => p.bedrooms >= filters.bedrooms!);
    }

    return {
      properties: results,
      totalCount: results.length,
      isLiveApi: false,
    };
  }

  /**
   * Map Resales Online raw JSON response to our clean TypeScript Property schema
   */
  private mapResalesToInternal(data: any): Property[] {
    if (!data || !Array.isArray(data.Property)) {
      return [];
    }

    return data.Property.map((item: any) => {
      const matchedResort = RESORTS_DATA.find((r) =>
        item.Location?.toLowerCase().includes(r.id.toLowerCase())
      );

      return {
        id: String(item.Reference || item.PropertyId),
        referenceNumber: item.Reference || `RO-${item.PropertyId}`,
        title: item.Type && item.Location ? `${item.Type} in ${item.Location}` : 'Luxury Property in Murcia',
        slug: (item.Reference || `prop-${item.PropertyId}`).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        price: Number(item.Price || 0),
        currency: 'EUR',
        resortId: matchedResort?.id || 'resort-murcia',
        resortName: matchedResort?.name || item.Location || 'Costa Cálida',
        locationArea: `${item.Location || 'Murcia'}, Costa Cálida`,
        type: (item.Type?.toLowerCase().includes('villa')
          ? 'villa'
          : item.Type?.toLowerCase().includes('penthouse')
          ? 'penthouse'
          : item.Type?.toLowerCase().includes('townhouse')
          ? 'townhouse'
          : 'apartment') as PropertyType,
        status: (item.Status === 'Under Offer' ? 'under_offer' : 'for_sale') as PropertyStatus,
        bedrooms: Number(item.Bedrooms || 2),
        bathrooms: Number(item.Bathrooms || 1),
        buildAreaSqm: Number(item.BuiltArea || 80),
        plotAreaSqm: Number(item.PlotArea || 0),
        featured: Boolean(item.Featured),
        hasPrivatePool: Boolean(item.Pool?.toLowerCase().includes('private')),
        hasCommunalPool: Boolean(item.Pool),
        hasGolfView: Boolean(item.Views?.toLowerCase().includes('golf')),
        hasSolarium: Boolean(item.Features?.some?.((f: string) => f.toLowerCase().includes('solarium'))),
        hasAirConditioning: true,
        furnished: true,
        description: item.Description || 'Exclusive property listing imported via Spanish Resales MLS.',
        features: Array.isArray(item.Features) ? item.Features : ['Golf Views', 'Communal Pool', 'Terrace'],
        images: Array.isArray(item.Pictures?.Picture)
          ? item.Pictures.Picture.map((p: any) => p.PictureURL)
          : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
        agentName: 'Christine (Ultimate Murcia)',
        agentPhone: '+34 617 633 040',
        agentEmail: 'sales@ultimatemurcia.com',
        createdAt: new Date().toISOString(),
      };
    });
  }
}

export const resalesClient = new ResalesOnlineClient();
