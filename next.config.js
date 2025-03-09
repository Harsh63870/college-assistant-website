/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com', 'img.youtube.com', 'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig; 