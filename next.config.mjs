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
  
  // Enhanced webpack config for static files
  webpack: (config) => {
    config.cache = false
    
    // Ensure static files are properly handled
    config.resolve.fallback = { 
      fs: false, 
      path: false,
      crypto: false 
    }
    
    return config
  },
  
  // Clean URLs for static hosting
  assetPrefix: '',
  
  // Disable server features
  poweredByHeader: false,
  
  // Experimental features for better static file handling
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  
  // Ensure public folder contents are copied to output
  async rewrites() {
    return []
  },
  
  // Add headers for CSV files (helps with CORS in some hosting environments)
  async headers() {
    return [
      {
        source: '/data/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/csv',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig