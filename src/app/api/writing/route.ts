
import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/fetchers/writing';

export async function GET() {
  try {
    const works = await getArticles();
    return NextResponse.json(works, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error fetching works : ${error}` }, { status: 500 });
  }
}
