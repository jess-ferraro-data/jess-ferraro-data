'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Mobile-responsive chart wrapper component
export default function ResponsiveChart({ 
  children, 
  title, 
  subtitle, 
  mobilePreviewSrc, 
  mobilePreviewAlt = "Chart preview",
  chartId = "chart",
  showMobileInteractive = false 
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [showInteractive, setShowInteractive] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleShowInteractive = () => {
    setShowInteractive(true)
  }

  return (
    <div className="chart-container">
      {title && (
        <div className="chart-header">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="chart-content">
        {/* Desktop: Always show interactive chart */}
        <div style={{ display: isMobile ? 'none' : 'block' }}>
          {children}
        </div>
        
        {/* Mobile: Show static preview with option to load interactive */}
        {isMobile && (
          <div className="chart-mobile-static">
            {!showInteractive ? (
              <>
                {mobilePreviewSrc ? (
                  <Image 
                    src={mobilePreviewSrc} 
                    alt={mobilePreviewAlt}
                    className="chart-mobile-preview"
                  />
                ) : (
                  <div style={{
                    background: 'var(--grey-100)',
                    borderRadius: 'var(--border-radius)',
                    padding: 'var(--space-xl)',
                    margin: 'var(--space-lg) 0'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      textAlign: 'center',
                      marginBottom: 'var(--space-md)',
                      color: 'var(--grey-400)'
                    }}>
                      📊
                    </div>
                    <p style={{
                      textAlign: 'center',
                      color: 'var(--grey-600)',
                      fontSize: '1rem',
                      marginBottom: 'var(--space-md)'
                    }}>
                      Interactive chart available
                    </p>
                  </div>
                )}
                
                <p style={{
                  textAlign: 'center',
                  color: 'var(--grey-600)',
                  fontSize: '0.95rem',
                  marginBottom: 'var(--space-md)'
                }}>
                  Chart optimised for larger screens
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--space-sm)', 
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <button 
                    onClick={handleShowInteractive}
                    className="btn btn-primary"
                    style={{ fontSize: '0.875rem' }}
                  >
                    📱 Load Interactive Version
                  </button>
                  <a 
                    href={`#${chartId}`}
                    className="btn btn-outline"
                    style={{ fontSize: '0.875rem' }}
                    onClick={(e) => {
                      e.preventDefault()
                      // Scroll to desktop version hint
                      window.scrollTo({ 
                        top: window.scrollY + 100, 
                        behavior: 'smooth' 
                      })
                    }}
                  >
                    💻 View on Desktop
                  </a>
                </div>
                
                <div style={{
                  background: 'var(--primary-50)',
                  border: '1px solid var(--primary-200)',
                  borderRadius: 'var(--border-radius)',
                  padding: 'var(--space-md)',
                  marginTop: 'var(--space-md)',
                  fontSize: '0.875rem',
                  color: 'var(--primary-700)'
                }}>
                  <strong>💡 Best Experience:</strong> This interactive visualisation 
                  is optimised for desktop and tablet viewing for detailed data exploration.
                </div>
              </>
            ) : (
              // Show interactive chart on mobile when requested
              <div>
                <div style={{
                  background: 'var(--warning)',
                  color: 'white',
                  padding: 'var(--space-sm)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '0.875rem',
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  🔄 Interactive chart loaded - may be best viewed in landscape mode
                </div>
                {children}
                <button 
                  onClick={() => setShowInteractive(false)}
                  style={{
                    background: 'var(--grey-100)',
                    border: '1px solid var(--grey-300)',
                    borderRadius: 'var(--border-radius)',
                    padding: 'var(--space-sm) var(--space-md)',
                    fontSize: '0.875rem',
                    marginTop: 'var(--space-md)',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  ← Back to Mobile View
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Wrapper for your existing COVID timeline chart
export function ResponsiveCovidChart({ children }) {
  return (
    <ResponsiveChart
      title="COVID-19 Impact Timeline"
      subtitle="Arts & Recreation Employment - Percentage Changes 2019-2024"
      mobilePreviewSrc="/covid-timeline-preview.png" // You'll need to create this
      mobilePreviewAlt="COVID-19 impact timeline showing peak decline of -15.5% and recovery to 86%"
      chartId="covid-timeline"
    >
      {children}
    </ResponsiveChart>
  )
}

// Wrapper for your industry comparison chart
export function ResponsiveIndustryChart({ children }) {
  return (
    <ResponsiveChart
      title="Industry Recovery Race"
      subtitle="Employment recovery comparison across 7 service industries"
      mobilePreviewSrc="/industry-comparison-preview.png" // You'll need to create this
      mobilePreviewAlt="Industry comparison showing Arts & Recreation ranking #2 for recovery speed"
      chartId="industry-comparison"
    >
      {children}
    </ResponsiveChart>
  )
}

// Enhanced chart container with loading state
export function ChartContainer({ 
  children, 
  title, 
  subtitle, 
  isLoading = false,
  error = null,
  className = ""
}) {
  if (error) {
    return (
      <div className={`chart-container ${className}`}>
        <div className="chart-header">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 'var(--border-radius)',
          padding: 'var(--space-xl)',
          textAlign: 'center',
          color: '#dc2626'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>⚠️</div>
          <p style={{ marginBottom: 'var(--space-sm)', fontWeight: 600 }}>
            Chart Loading Error
          </p>
          <p style={{ fontSize: '0.875rem', color: '#991b1b' }}>
            {error}
          </p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={`chart-container ${className}`}>
        <div className="chart-header">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
        <div style={{
          background: 'var(--grey-50)',
          borderRadius: 'var(--border-radius)',
          padding: 'var(--space-xl)',
          textAlign: 'center',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid var(--grey-300)',
            borderTop: '4px solid var(--primary-500)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: 'var(--space-md)'
          }}></div>
          <p style={{ color: 'var(--grey-600)', fontSize: '0.95rem' }}>
            Loading chart data...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`chart-container ${className}`}>
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      </div>
      <div className="chart-content">
        {children}
      </div>
    </div>
  )
}

// Add loading animation keyframes to your CSS
const additionalCSS = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Enhanced mobile chart styles */
.chart-mobile-static {
  display: none;
  text-align: center;
  padding: var(--space-lg);
}

.chart-mobile-preview {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin-bottom: var(--space-md);
  box-shadow: var(--shadow-md);
}

/* Mobile-specific chart adjustments */
@media (max-width: 768px) {
  .chart-content > div:not(.chart-mobile-static) {
    display: none;
  }
  
  .chart-mobile-static {
    display: block;
  }
  
  /* Ensure Plotly charts don't overflow on mobile when shown */
  .chart-content .js-plotly-plot {
    width: 100% !important;
    height: auto !important;
    min-height: 300px;
  }
  
  /* Better mobile typography for charts */
  .chart-title {
    font-size: 1.25rem;
  }
  
  .chart-subtitle {
    font-size: 0.875rem;
  }
}

/* Tablet optimizations */
@media (min-width: 769px) and (max-width: 1024px) {
  .chart-content .js-plotly-plot {
    height: 450px !important;
  }
}

/* Large screen optimizations */
@media (min-width: 1025px) {
  .chart-content .js-plotly-plot {
    height: 500px !important;
  }
}
`