'use client'

import { useEffect, useRef, useState } from 'react'
import Plotly from 'plotly.js-dist-min'
import Papa from 'papaparse'

export default function RecoveryRaceChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadDataAndCreateChart()
  }, [])

  const loadDataAndCreateChart = async () => {
    try {
      setIsLoading(true)
      
      // Load recovery race data
      const response = await fetch('/data/recovery_race_viz_data.csv')
      const csvText = await response.text()
      
      const parsedData = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      })
      
      if (parsedData.errors.length > 0) {
        throw new Error('CSV parsing failed')
      }

      // Sort by recovery percentage (highest first)
      const sortedData = parsedData.data.sort((a, b) => 
        (b.recovery_percentage || b.Recovery_Percentage) - (a.recovery_percentage || a.Recovery_Percentage)
      )

      const industries = sortedData.map(row => row.industry_name || row.Industry_Name)
      const recoveryPcts = sortedData.map(row => row.recovery_percentage || row.Recovery_Percentage)
      const baselinePcts = sortedData.map(row => row.vs_baseline_percentage || row.vs_Baseline_Percentage)

      // Colors with Arts highlighted
      const colors = sortedData.map(row => {
        const industry = row.industry_name || row.Industry_Name
        if (industry.includes('Arts') || industry.includes('Recreation')) {
          return '#dc2626' // Red highlight for Arts
        }
        const recovery = row.recovery_percentage || row.Recovery_Percentage
        if (recovery >= 100) return '#16a34a' // Green for full recovery
        if (recovery >= 80) return '#22c55e'  // Light green
        if (recovery >= 60) return '#f59e0b'  // Orange
        return '#dc2626' // Red for poor recovery
      })

      // Create subplots data
      const trace1 = {
        x: industries,
        y: recoveryPcts,
        type: 'bar',
        name: 'Recovery Progress',
        marker: { color: colors },
        text: recoveryPcts.map(val => `${val.toFixed(0)}%`),
        textposition: 'outside',
        hovertemplate: '<b>%{x}</b><br>' +
                      'Recovery: %{y:.1f}%<br>' +
                      '<extra></extra>',
        yaxis: 'y1'
      }

      const trace2 = {
        x: industries,
        y: baselinePcts,
        type: 'bar',
        name: 'vs Pre-COVID',
        marker: { color: colors.map(color => color + '88') }, // Semi-transparent
        text: baselinePcts.map(val => `${val > 0 ? '+' : ''}${val.toFixed(0)}%`),
        textposition: 'outside',
        hovertemplate: '<b>%{x}</b><br>' +
                      'vs Baseline: %{y:+.1f}%<br>' +
                      '<extra></extra>',
        yaxis: 'y2'
      }

      const data = [trace1, trace2]

      const layout = {
        title: {
          text: '<b>Industry Recovery Race</b><br><sub>Recovery progress and current status vs pre-COVID</sub>',
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
          side: 'left',
          showgrid: true,
          gridcolor: '#e5e7eb'
        },
        yaxis2: {
          title: 'vs Pre-COVID Baseline (%)',
          side: 'right',
          overlaying: 'y',
          showgrid: false,
          zeroline: true,
          zerolinecolor: '#374151',
          zerolinewidth: 2
        },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white',
        font: { family: 'system-ui, sans-serif' },
        margin: { l: 80, r: 80, t: 120, b: 100 },
        height: 600,
        showlegend: true,
        legend: {
          x: 0.02,
          y: 0.98,
          bgcolor: 'rgba(255,255,255,0.8)',
          bordercolor: '#e5e7eb',
          borderwidth: 1
        },
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
            text: 'Full Recovery Line',
            x: 0.95,
            y: 100,
            xref: 'paper',
            yref: 'y1',
            showarrow: false,
            font: { color: '#22c55e', size: 10 }
          },
          // Find Arts position and add annotation
          {
            x: industries.findIndex(name => name.includes('Arts') || name.includes('Recreation')),
            y: recoveryPcts[industries.findIndex(name => name.includes('Arts') || name.includes('Recreation'))] + 5,
            text: '🎭 Arts & Recreation',
            showarrow: true,
            arrowhead: 2,
            arrowcolor: '#dc2626',
            font: { color: '#dc2626', size: 12, weight: 'bold' }
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

      Plotly.newPlot(chartRef.current, data, layout, config)
      setIsLoading(false)

    } catch (err) {
      console.error('Recovery chart loading error:', err)
      setError('Failed to load recovery chart data. Please check the CSV file path.')
      setIsLoading(false)
    }
  }

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
          🏁 Loading recovery race data...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        Recovery = (Current - COVID minimum) / (Baseline - COVID minimum) × 100. Hover for details.
      </p>
    </div>
  )
}
