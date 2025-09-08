'use client'

import { useEffect, useRef } from 'react'

export default function RecoveryRaceChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    // Sample recovery data
    const data = [
      { industry: 'Healthcare', recovery: 105, color: '#16a34a' },
      { industry: 'Arts & Recreation', recovery: 86, color: '#dc2626' },
      { industry: 'Professional Services', recovery: 78, color: '#2563eb' },
      { industry: 'Education', recovery: 74, color: '#7c3aed' },
      { industry: 'Retail Trade', recovery: 69, color: '#ea580c' },
      { industry: 'Finance', recovery: 65, color: '#0891b2' },
      { industry: 'Accommodation & Food', recovery: 58, color: '#be123c' }
    ]

    if (chartRef.current) {
      createRecoveryChart(data, chartRef.current)
    }
  }, [])

  const createRecoveryChart = (data, container) => {
    container.innerHTML = `
      <div style="background: #f8fafc; padding: 2rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h3 style="text-align: center; margin-bottom: 2rem; color: #1a202c; font-size: 1.5rem; font-weight: 700;">
          Industry Recovery Race (December 2024)
        </h3>
        <div style="max-width: 700px; margin: 0 auto;">
          ${data.map((item, index) => `
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
              <div style="width: 30px; text-align: center; font-weight: 700; color: #6b7280;">
                ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
              </div>
              <div style="width: 180px; font-size: 0.9rem; color: #4a5568; font-weight: 500;">${item.industry}</div>
              <div style="flex: 1; background: #e2e8f0; height: 28px; border-radius: 14px; overflow: hidden; margin: 0 1rem;">
                <div style="
                  width: ${item.recovery}%; 
                  height: 100%; 
                  background: linear-gradient(90deg, ${item.color}, ${item.color}88);
                  border-radius: 14px;
                  transition: width 1s ease;
                  ${item.industry === 'Arts & Recreation' ? 'box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);' : ''}
                "></div>
              </div>
              <div style="width: 70px; text-align: right; font-weight: 700; color: ${item.color};">
                ${item.recovery}%
              </div>
            </div>
          `).join('')}
        </div>
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 1rem; margin-top: 2rem;">
          <p style="color: #dc2626; font-weight: 600; margin: 0; text-align: center;">
            🎭 Arts & Recreation: Despite the steepest fall, achieved 2nd fastest recovery
          </p>
        </div>
        <p style="text-align: center; margin-top: 1rem; color: #6b7280; font-size: 0.9rem;">
          Recovery percentage: (Current employment - COVID minimum) / (Pre-COVID baseline - COVID minimum) × 100
        </p>
      </div>
    `
  }

  return <div ref={chartRef} style={{ margin: '2rem 0' }} />
}
