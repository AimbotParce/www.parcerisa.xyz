import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.shields.io",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

export default nextConfig
