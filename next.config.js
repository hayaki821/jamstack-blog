/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless',
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
