/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.prismic.io', 'source.unsplash.com'],
  }
};

module.exports = nextConfig;
