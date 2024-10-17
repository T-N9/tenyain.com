import { NextResponse } from 'next/server';
import { getWorksPage } from '@/lib/fetchers/works';
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const pageNo = parseInt(searchParams.get('pageNo') || '1', 10);
    const count = parseInt(searchParams.get('count') || '10', 10);

    const result = await getWorksPage(pageNo, count);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error fetching works: ${error}` }, { status: 500 });
  }
}
