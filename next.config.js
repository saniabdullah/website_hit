/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    runtime: 'edge'
  },
  // output: 'export',
  // distDir: 'dist',
}
module.exports = nextConfig
