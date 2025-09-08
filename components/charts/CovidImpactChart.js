'use client'

import { useEffect, useRef, useState } from 'react'

export default function CovidImpactChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadDataAndCreateChart = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        const Papa = (await import('papaparse')).default
        
        setIsLoading(true)
        
        // Load your actual CSV data
        const response = await fetch('/data/industry_comparison_covid.csv')
        if (!response.ok) {
          throw new Error(`Failed to load CSV: ${response.status}`)
        }
        
        const csvText = await response.text()
        
        // Parse CSV with your exact column names
        const parsedData = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true
        })
        
        if (parsedData.errors.length > 0) {
          console.warn('CSV parsing warnings:', parsedData.errors)
        }

        // Extract data using your actual column names
        const industryData = parsedData.data.map(row => ({
          code: row.industry_code,
          name: row.industry_name,
          change: row.employment_change_pct,
          period: row.period
        })).filter(row => row.name && row.change !== null) // Remove any empty rows

        // Sort by impact (most negative first)
        const sortedData = industryData.sort((a, b) => a.change - b.change)
        
        const industries = sortedData.map(d => d.name)
        const changes = sortedData.map(d => d.change)

        // Create colors based on impact severity
        const colors = changes.map(value => {
          if (value < -10) return '#dc2626' // Deep red for severe impact
          if (value < -5) return '#ea580c'  // Orange-red
          if (value < -2) return '#f59e0b'  // Orange
          if (value < 0) return '#fbbf24'   // Yellow
          return '#22c55e'                  // Green for positive
        })

        // Highlight Arts & Recreation specifically
        const highlightColors = colors.map((color, i) => {
          const industry = industries[i]
          return industry.includes('Arts') || industry.includes('Recreation') 
            ? '#dc2626' 
            : color
        })

        const data = [{
          x: changes,
          y: industries,
          type: 'bar',
          orientation: 'h',
          marker: {
            color: highlightColors,
            line: {
              color: 'rgba(0,0,0,0.2)',
              width: 1
            }
          },
          text: changes.map(val => `${val > 0 ? '+' : ''}${val.toFixed(1)}%`),
          textposition: 'outside',
          textfont: {
            size: 12,
            color: '#1f2937'
          },
          hovertemplate: '<b>%{y}</b><br>' +
                        'Employment Change: %{x:.2f}%<br>' +
                        'Period: 2020-Q2<br>' +
                        '<extra></extra>'
        }]

        const layout = {
          title: {
            text: '<b>COVID-19 Employment Impact by Industry</b><br><sub>Percentage change during peak impact (2020-Q2)</sub>',
            x: 0.5,
            font: { size: 18, color: '#1f2937' }
          },
          xaxis: {
            title: 'Employment Change (%)',
            showgrid: true,
            gridcolor: '#e5e7eb',
            zeroline: true,
            zerolinecolor: '#374151',
            zerolinewidth: 2,
            tickfont: { size: 11 }
          },
          yaxis: {
            title: '',
            tickfont: { size: 11 },
            automargin: true
          },
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          font: { family: 'system-ui, sans-serif' },
          margin: { l: 280, r: 100, t: 100, b: 80 },
          height: 500,
          annotations: [{
            x: Math.min(...changes) * 0.8,
            y: industries.findIndex(name => name.includes('Arts') || name.includes('Recreation')),
            text: '🎭 Arts hit hardest',
            showarrow: true,
            arrowhead: 2,
            arrowcolor: '#dc2626',
            font: { color: '#dc2626', size: 12, weight: 'bold' },
            bgcolor: 'rgba(255,255,255,0.9)',
            bordercolor: '#dc2626',
            borderwidth: 1
          }]
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
          displaylogo: false,
          toImageButtonOptions: {
            format: 'png',
            filename: 'covid_employment_impact',
            height: 500,
            width: 900,
            scale: 2
          }
        }

        Plotly.newPlot(chartRef.current, data, layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Chart loading error:', err)
        setError(`Failed to load chart data: ${err.message}`)
        setIsLoading(false)
      }
    }

    loadDataAndCreateChart()
  }, [])

  if (error) {
    return (
      <div style={{ 
        background: '#fef2f2', 
        border: '1px solid #fecaca', 
        borderRadius: '0.5rem', 
        padding: '1rem', 
        color: '#dc2626',
        margin: '2rem 0'
      }}>
        <strong>⚠️ Chart Error:</strong> {error}
        <br />
        <small>Make sure industry_comparison_covid.csv is in the public/data/ folder</small>
      </div>
    )
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      {isLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem', 
          color: '#6b7280',
          background: '#f9fafb',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
          <div>Loading industry comparison data...</div>
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      {!isLoading && !error && (
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1rem', 
          color: '#6b7280', 
          fontSize: '0.875rem' 
        }}>
          Source: ABS Labour Account Quarterly. Interactive chart - hover for details.
        </p>
      )}
    </div>
  )
}
