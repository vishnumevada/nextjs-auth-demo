/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: ["sangw.in", "localhost", "picsum.photos"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "sangw.in",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "picsum.photos",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
