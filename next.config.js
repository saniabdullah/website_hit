/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"]
  },
  // output: 'export',
  // distDir: 'dist',
}
module.exports = nextConfig
