import { NextRequest, NextResponse } from 'next/server';
import { resalesClient } from '@/lib/resales-api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const location = searchParams.get('location') || undefined;
  const propertyType = searchParams.get('type') || undefined;
  const minPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;
  const bedrooms = searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : undefined;
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  try {
    const result = await resalesClient.searchProperties({
      location,
      propertyType,
      minPrice,
      maxPrice,
      bedrooms,
      page,
      pageSize: 24,
    });

    return NextResponse.json({
      success: true,
      data: result.properties,
      meta: {
        total: result.totalCount,
        page,
        isLiveApi: result.isLiveApi,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch properties from Resales Online API',
      },
      { status: 500 }
    );
  }
}
