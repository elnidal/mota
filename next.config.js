/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Cloudflare Pages
  images: {
    unoptimized: true, // Cloudflare does not support Next.js Image Optimization
    domains: ['images.ctfassets.net'], // For Contentful images
  }
};

module.exports = nextConfig;
