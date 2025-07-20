import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Skip ESLint during production builds.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Allow production builds to succeed even if TypeScript errors exist.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable Next.js Image Optimization (helpful when using plain URLs or
  // unsupported providers in static deployments).
  images: {
    unoptimized: true,
  },
}

export default nextConfig
