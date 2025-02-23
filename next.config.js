/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['images.ctfassets.net'], // For Contentful images
  },
};

module.exports = nextConfig;
