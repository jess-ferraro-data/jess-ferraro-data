'use client'

import { useEffect, useRef, useState } from 'react'
import Plotly from 'plotly.js-dist-min'
import Papa from 'papaparse'

export default function TimelineChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadDataAndCreateChart()
  }, [])

  const loadDataAndCreateChart = async () => {
    try {
      setIsLoading(true)
      
      // Load timeline data
      const response = await fetch('/data/timeline_data_M62.csv')
      const csvText = await response.text()
      
      const parsedData = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      })
      
      if (parsedData.errors.length > 0) {
        throw new Error('CSV parsing failed')
      }

      // Prepare timeline data
      const quarters = parsedData.data.map(row => row.TIME_PERIOD || row.Quarter)
      const values = parsedData.data.map(row => row.OBS_VALUE || row.Employment_Thousands)

      // Color code the line based on periods
      const lineColors = values.map((val, i) => {
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
          size: 8,
          color: lineColors,
          line: {
            color: 'white',
            width: 2
          }
        },
        hovertemplate: '<b>%{x}</b><br>' +
                      'Employment: %{y:.1f}k people<br>' +
                      '<extra></extra>',
        fill: 'tonexty',
        fillcolor: 'rgba(15, 118, 110, 0.1)'
      }

      // Find key points for annotations
      const covidStart = quarters.findIndex(q => q === '2020-Q1')
      const covidLow = values.indexOf(Math.min(...values.slice(covidStart, covidStart + 8)))
      const currentPoint = values.length - 1

      const layout = {
        title: {
          text: '<b>Arts Employment Journey: 2019-2024</b><br><sub>Number of people employed (thousands)</sub>',
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
        margin: { l: 80, r: 80, t: 100, b: 100 },
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
          {
            x: quarters[covidStart],
            y: values[covidStart],
            text: '🦠 Pandemic Begins',
            showarrow: true,
            arrowhead: 2,
            arrowcolor: '#dc2626',
            font: { color: '#dc2626', size: 11 }
          },
          {
            x: quarters[covidLow],
            y: values[covidLow],
            text: `📉 Lowest Point<br>${values[covidLow]:.0f}k jobs`,
            showarrow: true,
            arrowhead: 2,
            arrowcolor: '#dc2626',
            font: { color: '#dc2626', size: 11 },
            bgcolor: 'white',
            bordercolor: '#dc2626',
            borderwidth: 1
          },
          {
            x: quarters[currentPoint],
            y: values[currentPoint],
            text: `📈 Current Level<br>${values[currentPoint]:.0f}k jobs`,
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
      console.error('Timeline chart loading error:', err)
      setError('Failed to load timeline data. Please check the CSV file path.')
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
          📈 Loading timeline data...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        Source: ABS Labour Account M62 (Employed persons - Percentage changes). Interactive timeline.
      </p>
    </div>
  )
}
