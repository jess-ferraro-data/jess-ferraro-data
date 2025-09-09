/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Optimize images for static hosting
  images: {
    unoptimized: true
  },
  
  // Disable webpack cache to avoid large files
  webpack: (config, { isServer }) => {
    // Disable webpack cache for smaller builds
    config.cache = false
    
    return config
  },
  
  // Optimize build output
  experimental: {
    // Reduce bundle size
    optimizeCss: true
  },
  
  // Configure for static hosting
  assetPrefix: undefined,
  basePath: '',
  
  // Disable unnecessary features for static sites
  poweredByHeader: false,
  
  // Environment configuration
  env: {
    CUSTOM_KEY: 'custom_value'
  }
}

export default nextConfig