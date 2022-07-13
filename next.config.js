/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: "imgix",
    path: ''
  },
  fallback: false
};

module.exports = nextConfig
