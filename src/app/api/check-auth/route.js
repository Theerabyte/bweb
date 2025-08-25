import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const token = cookies().get('authToken')?.value;
        if (!token) {
            return NextResponse.json({ isAuthenticated: false });
        }
        verify(token, process.env.JWT_SECRET);
        return NextResponse.json({ isAuthenticated: true });
    } catch (err) {
        console.error('Auth check error:', err);
        return NextResponse.json({ isAuthenticated: false });
    }
}