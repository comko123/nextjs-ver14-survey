/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    experimental: {
        taint: true
    },
    images: {
        remotePatterns: []
    }
};

export default nextConfig;
