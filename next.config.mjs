/** @type {import('next').NextConfig} */
const nextConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        { source: '/' },
    ],
};

export default nextConfig;
