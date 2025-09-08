'use client'

import { useEffect, useRef, useState } from 'react'

export default function TimelineChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadDataAndCreateChart = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        const Papa = (await import('papaparse')).default
        
        setIsLoading(true)
        
        // Load your timeline data
        const response = await fetch('/data/timeline_data_m62.csv')
        if (!response.ok) {
          throw new Error(`Failed to load timeline CSV: ${response.status}`)
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

        // Extract and clean your data
        const timelineData = parsedData.data
          .map(row => ({
            quarter: row.TIME_PERIOD,
            value: row.OBS_VALUE
          }))
          .filter(row => row.quarter && row.value !== null && row.value !== undefined)
          .sort((a, b) => a.quarter.localeCompare(b.quarter)) // Sort chronologically

        const quarters = timelineData.map(d => d.quarter)
        const values = timelineData.map(d => d.value)

        // Color code the line based on periods
        const markerColors = values.map((val, i) => {
          const quarter = quarters[i]
          if (quarter >= '2020-Q1' && quarter <= '2021-Q4') return '#dc2626' // COVID period red
          if (quarter >= '2022-Q1' && quarter <= '2023-Q4') return '#f59e0b' // Recovery orange  
          if (quarter >= '2024-Q1') return '#22c55e' // Current green
          return '#3b82f6' // Pre-COVID blue
        })

        const trace = {
          x: quarters,
          y: values,
          type: 'scatter',
          mode: 'lines+markers',
          line: {
            color: '#0f766e',
            width: 3
          },
          marker: {
            size: 6,
            color: markerColors,
            line: {
              color: 'white',
              width: 2
            }
          },
          hovertemplate: '<b>%{x}</b><br>' +
                        'Change: %{y:.1f}%<br>' +
                        '<extra></extra>',
          fill: 'tonexty',
          fillcolor: 'rgba(15, 118, 110, 0.1)'
        }

        // Find key points for annotations
        const covidStartIndex = quarters.findIndex(q => q === '2020-Q1')
        const covidLowIndex = values.indexOf(Math.min(...values))
        const currentIndex = values.length - 1

        const layout = {
          title: {
            text: '<b>Arts Employment Changes: 2019-2024</b><br><sub>Employment percentage changes 2019-2024</sub>',
            x: 0.5,
            font: { size: 18, color: '#1f2937' }
          },
          xaxis: {
            title: 'Quarter',
            showgrid: true,
            gridcolor: '#e5e7eb',
            tickangle: -45
          },
          yaxis: {
            title: 'Employment Change (%)',
            showgrid: true,
            gridcolor: '#e5e7eb',
            zeroline: true,
            zerolinecolor: '#374151',
            zerolinewidth: 2
          },
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          font: { family: 'system-ui, sans-serif' },
          margin: { l: 80, r: 80, t: 100, b: 120 },
          height: 500,
          shapes: [
            // COVID period highlight
            {
              type: 'rect',
              xref: 'x',
              yref: 'paper',
              x0: '2020-Q1',
              y0: 0,
              x1: '2021-Q4',
              y1: 1,
              fillcolor: 'rgba(220, 38, 38, 0.1)',
              line: { width: 0 },
              layer: 'below'
            }
          ],
          annotations: [
            // COVID start
            covidStartIndex >= 0 ? {
              x: quarters[covidStartIndex],
              y: values[covidStartIndex],
              text: '🦠 Pandemic Begins',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#dc2626',
              font: { color: '#dc2626', size: 11 }
            } : null,
            // Lowest point
            covidLowIndex >= 0 ? {
              x: quarters[covidLowIndex],
              y: values[covidLowIndex],
              text: `📉 Lowest Point<br>${values[covidLowIndex].toFixed(1)}%`,
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#dc2626',
              font: { color: '#dc2626', size: 11 },
              bgcolor: 'rgba(255,255,255,0.9)',
              bordercolor: '#dc2626',
              borderwidth: 1
            } : null,
            // Current level
            currentIndex >= 0 ? {
              x: quarters[currentIndex],
              y: values[currentIndex],
              text: `📈 Latest<br>${values[currentIndex].toFixed(1)}%`,
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#22c55e',
              font: { color: '#22c55e', size: 11 },
              bgcolor: 'rgba(255,255,255,0.9)',
              bordercolor: '#22c55e',
              borderwidth: 1
            } : null
          ].filter(Boolean) // Remove null annotations
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
          displaylogo: false,
          toImageButtonOptions: {
            format: 'png',
            filename: 'arts_employment_timeline',
            height: 500,
            width: 900,
            scale: 2
          }
        }

        Plotly.newPlot(chartRef.current, [trace], layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Timeline chart error:', err)
        setError(`Failed to load timeline data: ${err.message}`)
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
        <strong>⚠️ Timeline Error:</strong> {error}
        <br />
        <small>Make sure timeline_data_m62.csv is in the public/data/ folder</small>
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
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
          <div>Loading timeline data...</div>
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      {!isLoading && !error && (
        <div>
          <p style={{ 
            textAlign: 'center', 
            marginTop: '1rem', 
            color: '#6b7280', 
            fontSize: '0.875rem' 
          }}>
            Source: ABS Labour Account M62 (Employed persons - Percentage changes). Interactive chart.
          </p>
          
          {/* Enhanced timeline commentary */}
          <div style={{
            background: '#f0fdfa',
            border: '1px solid #5eead4',
            borderRadius: '0.75rem',
            padding: '2rem',
            marginTop: '2rem'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#0f766e',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              📅 Key Moments in the Recovery Journey
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                borderLeft: '4px solid #dc2626'
              }}>
                <div style={{ fontWeight: '600', color: '#dc2626', marginBottom: '0.5rem' }}>
                  March 2020 - The Lockdown
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Theatre doors locked, concert halls went silent, film sets shut down as Australia entered unprecedented restrictions.
                </div>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                borderLeft: '4px solid #f59e0b'
              }}>
                <div style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  2021 - Digital Transformation
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Streaming platforms exploded, virtual events launched, and the creative sector rapidly embraced online delivery.
                </div>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e'
              }}>
                <div style={{ fontWeight: '600', color: '#22c55e', marginBottom: '0.5rem' }}>
                  2022-2024 - The Comeback
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Hybrid models emerged, live events returned with new safety protocols, employment steadily climbed back toward pre-pandemic levels.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
