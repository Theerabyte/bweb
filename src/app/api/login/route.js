import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        const validUsername = process.env.LOGIN_USERNAME;
        const validPassword = process.env.LOGIN_PASSWORD;

        console.log('Request Received - Username:', username);
        console.log('Request Received - Password:', password);
        console.log('Environment Variable - Valid Username:', validUsername);
        console.log('Environment Variable - Valid Password:', validPassword);

        if (!validUsername || !validPassword) {
            console.error('Environment variables not loaded');
            return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
        }

        if (username === validUsername && password === validPassword) {
            console.log('Authentication Successful');
            const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

            cookies().set('authToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/',
            });

            return NextResponse.json({ success: true });
        } else {
            console.log('Authentication Failed - Username or Password mismatch');
            return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}