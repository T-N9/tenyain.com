// app/api/works/route.ts
import { NextResponse } from 'next/server';
import { getWorks } from '@/lib/fetchers/works';

export async function GET() {
  try {
    const works = await getWorks();
    return NextResponse.json(works, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching works' }, { status: 500 });
  }
}
