/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensures compatibility with Cloudflare Pages
  images: {
    unoptimized: true, // Required for Cloudflare Pages
    domains: ['images.ctfassets.net'], // For Contentful images
  },
  // Disable server-side image optimization as it's not supported on Cloudflare Pages
  experimental: {
    optimizeImages: false,
  }
};

module.exports = nextConfig;
