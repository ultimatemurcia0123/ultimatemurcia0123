import { NextRequest, NextResponse } from 'next/server';
import { resalesClient } from '@/lib/resales-api';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const location = body.location || 'Murcia';

    // Fetch properties using the Resales Client
    const result = await resalesClient.searchProperties({
      location,
      pageSize: 50,
    });

    // If Supabase table exists, upsert listings
    let syncedToDatabase = false;
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { error } = await supabase
          .from('properties')
          .upsert(
            result.properties.map((p) => ({
              id: p.id,
              reference_number: p.referenceNumber,
              title: p.title,
              slug: p.slug,
              price: p.price,
              resort_id: p.resortId,
              resort_name: p.resortName,
              property_type: p.type,
              status: p.status,
              bedrooms: p.bedrooms,
              bathrooms: p.bathrooms,
              build_area_sqm: p.buildAreaSqm,
              images: p.images,
              features: p.features,
              updated_at: new Date().toISOString(),
            })),
            { onConflict: 'reference_number' }
          );

        if (!error) {
          syncedToDatabase = true;
        }
      }
    } catch (e) {
      console.warn('Supabase table upsert skipped (table not yet migrated):', e);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully synchronized ${result.properties.length} properties from Resales Online.`,
      stats: {
        totalFetched: result.properties.length,
        isLiveFeed: result.isLiveApi,
        syncedToDatabase,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Sync operation failed',
      },
      { status: 500 }
    );
  }
}
