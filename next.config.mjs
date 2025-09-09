/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  // Add trailing slashes for static hosting
  trailingSlash: true,
  
  // Optimize images for static hosting
  images: {
    unoptimized: true
  },
  
  // Disable webpack cache to avoid large files
  webpack: (config) => {
    // Disable webpack cache for smaller builds
    config.cache = false
    return config
  },
  
  // Disable unnecessary headers
  poweredByHeader: false,
}

export default nextConfig