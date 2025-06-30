const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
 //  output: 'export',              // Enables static export
//  basePath: '/ripsscon2025',     //  VERY IMPORTANT for subfolder hosting
//  assetPrefix: '/ripsscon2025/', //  Ensures CSS/JS loads correctly

  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },

  images: {
    unoptimized: true, // Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },

  allowedDevOrigins: ['http://0.0.0.0:3000'], // Optional
};

module.exports = nextConfig;
