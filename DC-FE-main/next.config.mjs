/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build',
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
          },
          {
              protocol: 'https',
              hostname: '*.cloudfront.net',
              port: '',
          },
          {
              protocol: 'https',
              hostname: 'placehold.co',
              port: '',
          },
          {
              protocol: 'https',
              hostname: '*.googleusercontent.com',
              port: '',
          },
      ]
  },
  reactStrictMode: false,
};

export default nextConfig;
