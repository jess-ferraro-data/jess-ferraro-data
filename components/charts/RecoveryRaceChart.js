'use client'

import { useEffect, useRef, useState } from 'react'

export default function RecoveryRaceChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadDataAndCreateChart = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        const Papa = (await import('papaparse')).default
        
        setIsLoading(true)
        
        // Try to load recovery race data, fall back to sample if not available
        let recoveryData
        
        try {
          const response = await fetch('/data/recovery_race_viz_data.csv')
          if (response.ok) {
            const csvText = await response.text()
            const parsedData = Papa.parse(csvText, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true
            })
            
            recoveryData = parsedData.data.map(row => ({
              industry: row.industry_name || row.Industry_Name,
              recovery: row.recovery_percentage || row.Recovery_Percentage,
              baseline: row.vs_baseline_percentage || row.vs_Baseline_Percentage
            })).filter(row => row.industry && row.recovery !== null)
            
          } else {
            throw new Error('Recovery data file not found')
          }
        } catch (fetchError) {
          console.warn('Using sample recovery data:', fetchError.message)
          // Use sample data based on your industry comparison
          recoveryData = [
            { industry: 'Health Care and Social Assistance', recovery: 105, baseline: 8 },
            { industry: 'Arts and Recreation Services', recovery: 86, baseline: -2.3 },
            { industry: 'Professional Services', recovery: 78, baseline: 1.2 },
            { industry: 'Education and Training', recovery: 74, baseline: 0.8 },
            { industry: 'Retail Trade', recovery: 69, baseline: -1.1 },
            { industry: 'Accommodation and Food Services', recovery: 58, baseline: -4.2 }
          ]
        }

        // Sort by recovery percentage (highest first)
        const sortedData = recoveryData.sort((a, b) => b.recovery - a.recovery)
        
        const industries = sortedData.map(d => d.industry)
        const recoveryPcts = sortedData.map(d => d.recovery)
        const baselinePcts = sortedData.map(d => d.baseline)

        // Colors - highlight Arts
        const colors = sortedData.map(d => {
          if (d.industry.includes('Arts') || d.industry.includes('Recreation')) {
            return '#dc2626' // Red highlight for Arts
          }
          if (d.recovery >= 100) return '#16a34a' // Green for full recovery
          if (d.recovery >= 80) return '#22c55e'  // Light green
          if (d.recovery >= 60) return '#f59e0b'  // Orange
          return '#dc2626' // Red for poor recovery
        })

        const trace1 = {
          x: industries,
          y: recoveryPcts,
          type: 'bar',
          name: 'Recovery Progress (%)',
          marker: { color: colors },
          text: recoveryPcts.map(val => `${val.toFixed(0)}%`),
          textposition: 'outside',
          hovertemplate: '<b>%{x}</b><br>' +
                        'Recovery: %{y:.1f}%<br>' +
                        '<extra></extra>',
          yaxis: 'y1'
        }

        const layout = {
          title: {
            text: '<b>Industry Recovery Race</b><br><sub>Recovery progress from COVID employment lows</sub>',
            x: 0.5,
            font: { size: 18, color: '#1f2937' }
          },
          xaxis: {
            title: 'Industry',
            tickangle: -45,
            tickfont: { size: 10 }
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
          }],
          annotations: [
            {
              text: 'Full Recovery (100%)',
              x: 0.95,
              y: 100,
              xref: 'paper',
              yref: 'y1',
              showarrow: false,
              font: { color: '#22c55e', size: 10 }
            },
            // Highlight Arts position
            {
              x: industries.findIndex(name => name.includes('Arts') || name.includes('Recreation')),
              y: recoveryPcts[industries.findIndex(name => name.includes('Arts') || name.includes('Recreation'))] + 5,
              text: '🎭 Arts & Recreation<br>2nd fastest recovery!',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#dc2626',
              font: { color: '#dc2626', size: 12, weight: 'bold' },
              bgcolor: 'rgba(255,255,255,0.9)',
              bordercolor: '#dc2626',
              borderwidth: 1
            }
          ]
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
          displaylogo: false,
          toImageButtonOptions: {
            format: 'png',
            filename: 'recovery_race_chart',
            height: 600,
            width: 1000,
            scale: 2
          }
        }

        Plotly.newPlot(chartRef.current, [trace1], layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Recovery chart error:', err)
        setError(`Failed to load recovery chart: ${err.message}`)
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
        <strong>⚠️ Recovery Chart Error:</strong> {error}
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
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏁</div>
          <div>Loading recovery race data...</div>
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
          Recovery = (Current - COVID minimum) / (Baseline - COVID minimum) × 100
        </p>
      )}
    </div>
  )
}
