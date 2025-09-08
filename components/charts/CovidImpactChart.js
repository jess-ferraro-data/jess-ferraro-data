'use client'

import { useEffect, useRef, useState } from 'react'

export default function CovidImpactChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Import Plotly dynamically to avoid SSR issues
    const loadPlotly = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        const Papa = (await import('papaparse')).default
        
        setIsLoading(true)
        
        // Sample data for now - replace with your CSV loading later
        const sampleData = [
          { industry: 'Arts and Recreation Services', change: -15.5 },
          { industry: 'Accommodation and Food Services', change: -8.9 },
          { industry: 'Retail Trade', change: -5.2 },
          { industry: 'Professional Services', change: -3.1 },
          { industry: 'Education and Training', change: -2.8 },
          { industry: 'Health Care and Social Assistance', change: 2.1 },
          { industry: 'Financial and Insurance Services', change: 0.8 }
        ]

        // Sort by impact (most negative first)
        const sortedData = sampleData.sort((a, b) => a.change - b.change)
        const industries = sortedData.map(d => d.industry)
        const changes = sortedData.map(d => d.change)

        // Create colors
        const colors = changes.map(value => {
          if (value < -10) return '#dc2626'
          if (value < -5) return '#ea580c'
          if (value < 0) return '#f59e0b'
          return '#22c55e'
        })

        const data = [{
          x: changes,
          y: industries,
          type: 'bar',
          orientation: 'h',
          marker: { color: colors },
          text: changes.map(val => `${val > 0 ? '+' : ''}${val.toFixed(1)}%`),
          textposition: 'outside',
          hovertemplate: '<b>%{y}</b><br>Employment Change: %{x:.1f}%<extra></extra>'
        }]

        const layout = {
          title: {
            text: '<b>COVID-19 Employment Impact by Industry</b><br><sub>Percentage change March-June 2020</sub>',
            x: 0.5,
            font: { size: 18, color: '#1f2937' }
          },
          xaxis: {
            title: 'Employment Change (%)',
            showgrid: true,
            gridcolor: '#e5e7eb',
            zeroline: true,
            zerolinecolor: '#374151',
            zerolinewidth: 2
          },
          yaxis: {
            title: '',
            automargin: true
          },
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          font: { family: 'system-ui, sans-serif' },
          margin: { l: 250, r: 80, t: 100, b: 80 },
          height: 500
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          displaylogo: false
        }

        Plotly.newPlot(chartRef.current, data, layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Chart loading error:', err)
        setError('Failed to load chart')
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
          📊 Loading chart...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        Source: ABS Labour Account. Arts & Recreation hit hardest at -15.5%.
      </p>
    </div>
  )
}
