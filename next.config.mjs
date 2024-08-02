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
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "tailwindui.com",
                pathname: "/**",
            },
        ],
    },
    redirects() {
        return [
            // Basic redirect
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
};
export default nextConfig;
