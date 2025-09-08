'use client'

import { useEffect, useRef } from 'react'

export default function CovidImpactChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    // Sample data - replace with your actual COVID impact data
    const data = [
      { industry: 'Arts & Recreation', decline: -15.5, color: '#dc2626' },
      { industry: 'Accommodation & Food', decline: -8.9, color: '#ea580c' },
      { industry: 'Retail Trade', decline: -5.2, color: '#d97706' },
      { industry: 'Professional Services', decline: -3.1, color: '#ca8a04' },
      { industry: 'Education', decline: -2.8, color: '#65a30d' },
      { industry: 'Healthcare', decline: 2.1, color: '#16a34a' },
      { industry: 'Finance', decline: 0.8, color: '#059669' }
    ]

    // Create simple bar chart with D3 or Chart.js
    // This is a placeholder - implement with your preferred charting library
    if (chartRef.current) {
      const chart = createBarChart(data, chartRef.current)
    }
  }, [])

  const createBarChart = (data, container) => {
    // Placeholder implementation
    container.innerHTML = `
      <div style="background: #f8fafc; padding: 2rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h3 style="text-align: center; margin-bottom: 2rem; color: #1a202c; font-size: 1.5rem; font-weight: 700;">
          Employment Changes During COVID-19 (March-June 2020)
        </h3>
        <div style="max-width: 600px; margin: 0 auto;">
          ${data.map(item => `
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <div style="width: 200px; font-size: 0.9rem; color: #4a5568;">${item.industry}</div>
              <div style="flex: 1; background: #e2e8f0; height: 24px; border-radius: 4px; overflow: hidden; margin: 0 1rem;">
                <div style="
                  width: ${Math.abs(item.decline) * 6}px; 
                  height: 100%; 
                  background: ${item.color}; 
                  border-radius: 4px;
                  ${item.decline > 0 ? 'margin-left: auto;' : ''}
                "></div>
              </div>
              <div style="width: 60px; text-align: right; font-weight: 600; color: ${item.color};">
                ${item.decline > 0 ? '+' : ''}${item.decline}%
              </div>
            </div>
          `).join('')}
        </div>
        <p style="text-align: center; margin-top: 2rem; color: #6b7280; font-size: 0.9rem;">
          Source: ABS Labour Account, March-June 2020
        </p>
      </div>
    `
  }

  return <div ref={chartRef} style={{ margin: '2rem 0' }} />
}