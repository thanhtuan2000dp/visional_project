/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeskulptor-demos.commondatastorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
