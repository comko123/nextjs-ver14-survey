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
        remotePatterns: [{
            protocol: "https",
            hostname: process.env.CONFIG_IMAGE_ROOT,
            port: "",
            pathname: "/600/**"
        },
        {
            protocol: "https",
            hostname: process.env.CONFIG_IMAGE_ROOT,
            port: "",
            pathname: "/150/**"
        }]
    }
};

export default nextConfig;
