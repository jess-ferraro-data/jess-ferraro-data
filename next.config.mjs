/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - creates files in 'out' directory
  output: 'export',
  
  // Essential for static hosting
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Disable webpack cache
  webpack: (config) => {
    config.cache = false
    return config
  },
  
  // Clean URLs for static hosting
  assetPrefix: '',
  
  // Disable server features
  poweredByHeader: false,
}

export default nextConfig