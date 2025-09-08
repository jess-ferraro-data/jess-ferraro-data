'use client'

import { useEffect, useRef, useState } from 'react'

export default function RecoveryRaceChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPlotly = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        
        setIsLoading(true)
        
        // Sample recovery data - replace with your actual data
        const recoveryData = [
          { industry: 'Health Care and Social Assistance', recovery: 105 },
          { industry: 'Arts and Recreation Services', recovery: 86 },
          { industry: 'Professional Services', recovery: 78 },
          { industry: 'Education and Training', recovery: 74 },
          { industry: 'Retail Trade', recovery: 69 },
          { industry: 'Financial Services', recovery: 65 },
          { industry: 'Accommodation and Food Services', recovery: 58 }
        ]

        const industries = recoveryData.map(d => d.industry)
        const recoveryPcts = recoveryData.map(d => d.recovery)

        // Colors - highlight Arts
        const colors = recoveryData.map(d => {
          if (d.industry.includes('Arts')) return '#dc2626'
          if (d.recovery >= 100) return '#16a34a'
          if (d.recovery >= 80) return '#22c55e'
          if (d.recovery >= 60) return '#f59e0b'
          return '#dc2626'
        })

        const data = [{
          x: industries,
          y: recoveryPcts,
          type: 'bar',
          marker: { color: colors },
          text: recoveryPcts.map(val => `${val}%`),
          textposition: 'outside',
          hovertemplate: '<b>%{x}</b><br>Recovery: %{y}%<extra></extra>'
        }]

        const layout = {
          title: {
            text: '<b>Industry Recovery Race</b><br><sub>Recovery progress by December 2024</sub>',
            x: 0.5,
            font: { size: 18, color: '#1f2937' }
          },
          xaxis: {
            title: 'Industry',
            tickangle: -45
          },
          yaxis: {
            title: 'Recovery Progress (%)',
            showgrid: true,
            gridcolor: '#e5e7eb'
          },
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          font: { family: 'system-ui, sans-serif' },
          margin: { l: 80, r: 80, t: 120, b: 150 },
          height: 600,
          shapes: [{
            type: 'line',
            xref: 'paper',
            x0: 0,
            x1: 1,
            y0: 100,
            y1: 100,
            line: {
              color: '#22c55e',
              width: 2,
              dash: 'dash'
            }
          }]
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          displaylogo: false
        }

        Plotly.newPlot(chartRef.current, data, layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Recovery chart error:', err)
        setError('Failed to load recovery chart')
        setIsLoading(false)
      }
    }

    loadPlotly()
  }, [])

  if (error) {
    return (
      <div style={{ 
        background: '#fef2f2', 
        border: '1px solid #fecaca', 
        borderRadius: '0.5rem', 
        padding: '1rem', 
        color: '#dc2626' 
      }}>
        ⚠️ {error}
      </div>
    )
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      {isLoading && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
          🏁 Loading recovery data...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        Arts achieved 86% recovery - 2nd fastest among service industries.
      </p>
    </div>
  )
}
