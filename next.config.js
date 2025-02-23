/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensures compatibility with Cloudflare Pages
  images: {
    unoptimized: true, // Required for Cloudflare Pages
    domains: ['images.ctfassets.net'], // For Contentful images
  }
};

module.exports = nextConfig;
