/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: "https",
        hostname: "ui.aceternity.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
  },
};

export default nextConfig;