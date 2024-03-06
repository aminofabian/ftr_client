/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.prismic.io', 'source.unsplash.com', 'images.unsplash.com'],
  }
};

module.exports = nextConfig;
