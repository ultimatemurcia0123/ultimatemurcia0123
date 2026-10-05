export type PropertyType = 'villa' | 'apartment' | 'townhouse' | 'penthouse';
export type PropertyStatus = 'for_sale' | 'under_offer' | 'sold' | 'newly_listed';

export interface Property {
  id: string;
  referenceNumber: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  resortId: string;
  resortName: string;
  locationArea: string; // e.g., Costa Cálida, Murcia
  type: PropertyType;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  buildAreaSqm: number;
  plotAreaSqm?: number;
  featured: boolean;
  hasPrivatePool: boolean;
  hasCommunalPool: boolean;
  hasGolfView: boolean;
  hasSolarium: boolean;
  hasAirConditioning: boolean;
  furnished: boolean;
  yearBuilt?: number;
  communityFeesYear?: number;
  description: string;
  features: string[];
  images: string[];
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  createdAt: string;
}

export interface Resort {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  location: string;
  golfCourse: string;
  golfHoles: number;
  beachDistanceKm: number;
  airportDistanceKm: number;
  heroImage: string;
  gallery: string[];
  features: string[];
}

export interface FilterState {
  searchQuery: string;
  resort: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  hasPoolOnly: boolean;
  golfViewOnly: boolean;
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'beds-desc';
}

export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  preferredLanguage: string;
  message: string;
  propertyReference?: string;
  propertyTitle?: string;
}
