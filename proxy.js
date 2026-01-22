import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function proxy(request) {
    const token = request.cookies.get('authToken')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/vault', request.url));
    }
    try {
        verify(token, process.env.JWT_SECRET);
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL('/vault', request.url));
    }
}

export const config = {
    matcher: ['/vault/:path*'],
};