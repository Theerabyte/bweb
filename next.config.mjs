/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        LOGIN_USERNAME: process.env.LOGIN_USERNAME,
        LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
    },
}

export default nextConfig