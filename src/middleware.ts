import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    if (url.pathname === '/writing/tag') {
        url.pathname = '/writing';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
