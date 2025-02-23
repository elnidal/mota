/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Cloudflare Pages
  images: {
    unoptimized: true, // Cloudflare does not support Next.js Image Optimization
    domains: ['images.ctfassets.net'], // For Contentful images
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during build
  }
};

module.exports = nextConfig;
