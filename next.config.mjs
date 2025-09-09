/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export temporarily to test
  // output: 'export',
  
  // Keep image optimization disabled
  images: {
    unoptimized: true
  },
  
  // Disable webpack cache to avoid large files
  webpack: (config) => {
    config.cache = false
    return config
  },
  
  // Disable unnecessary headers
  poweredByHeader: false,
  
  // Add trailing slashes
  trailingSlash: true,
}

export default nextConfig