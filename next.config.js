/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: false,
  compilerOptions: {
    "baseUrl": "."
  }
}

module.exports = nextConfig
