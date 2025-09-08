'use client'

import { useEffect, useRef, useState } from 'react'

export default function TimelineChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPlotly = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        
        setIsLoading(true)
        
        // Sample timeline data - replace with your actual data
        const timelineData = [
          { quarter: '2019-Q1', employment: 152 },
          { quarter: '2019-Q2', employment: 151 },
          { quarter: '2019-Q3', employment: 150 },
          { quarter: '2019-Q4', employment: 150 },
          { quarter: '2020-Q1', employment: 148 },
          { quarter: '2020-Q2', employment: 127 }, // COVID low
          { quarter: '2020-Q3', employment: 130 },
          { quarter: '2020-Q4', employment: 135 },
          { quarter: '2021-Q1', employment: 138 },
          { quarter: '2021-Q2', employment: 140 },
          { quarter: '2021-Q3', employment: 142 },
          { quarter: '2021-Q4', employment: 143 },
          { quarter: '2022-Q1', employment: 145 },
          { quarter: '2022-Q2', employment: 146 },
          { quarter: '2022-Q3', employment: 147 },
          { quarter: '2022-Q4', employment: 148 },
          { quarter: '2023-Q1', employment: 148 },
          { quarter: '2023-Q2', employment: 149 },
          { quarter: '2023-Q3', employment: 149 },
          { quarter: '2023-Q4', employment: 150 },
          { quarter: '2024-Q1', employment: 150 },
          { quarter: '2024-Q2', employment: 151 },
          { quarter: '2024-Q3', employment: 151 },
          { quarter: '2024-Q4', employment: 152 }
        ]

        const quarters = timelineData.map(d => d.quarter)
        const employment = timelineData.map(d => d.employment)

        const trace = {
          x: quarters,
          y: employment,
          type: 'scatter',
          mode: 'lines+markers',
          line: {
            color: '#0f766e',
            width: 3
          },
          marker: {
            size: 6,
            color: '#0f766e'
          },
          hovertemplate: '<b>%{x}</b><br>Employment: %{y}k people<extra></extra>'
        }

        // Find COVID low point
        const covidLowIndex = employment.indexOf(Math.min(...employment))
        const covidLowValue = employment[covidLowIndex]
        const currentValue = employment[employment.length - 1]

        const layout = {
          title: {
            text: '<b>Arts Employment Timeline: 2019-2024</b><br><sub>Number of people employed (thousands)</sub>',
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
            title: 'Employment (thousands)',
            showgrid: true,
            gridcolor: '#e5e7eb'
          },
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          font: { family: 'system-ui, sans-serif' },
          margin: { l: 80, r: 80, t: 100, b: 120 },
          height: 500,
          shapes: [{
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
          }],
          annotations: [
            {
              x: '2020-Q1',
              y: 148,
              text: '🦠 Pandemic Begins',
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#dc2626',
              font: { color: '#dc2626', size: 11 }
            },
            {
              x: quarters[covidLowIndex],
              y: covidLowValue,
              text: `📉 Lowest Point<br>${covidLowValue}k jobs`,
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#dc2626',
              font: { color: '#dc2626', size: 11 },
              bgcolor: 'white',
              bordercolor: '#dc2626',
              borderwidth: 1
            },
            {
              x: quarters[quarters.length - 1],
              y: currentValue,
              text: `📈 Current Level<br>${currentValue}k jobs`,
              showarrow: true,
              arrowhead: 2,
              arrowcolor: '#22c55e',
              font: { color: '#22c55e', size: 11 },
              bgcolor: 'white',
              bordercolor: '#22c55e',
              borderwidth: 1
            }
          ]
        }

        const config = {
          responsive: true,
          displayModeBar: true,
          displaylogo: false
        }

        Plotly.newPlot(chartRef.current, [trace], layout, config)
        setIsLoading(false)

      } catch (err) {
        console.error('Timeline chart error:', err)
        setError('Failed to load timeline')
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
          📈 Loading timeline...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        From 150k jobs pre-COVID to 127k at the lowest point, now recovered to 152k.
      </p>
    </div>
  )
}
