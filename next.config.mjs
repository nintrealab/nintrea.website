/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/**/**/**/**/*',
            },
            {
                protocol: 'https',
                hostname: 'dummyjson.com',
                port: '',
                pathname: '/**/**/*',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
    output: "export",
    basePath: "/nintrea.website",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
