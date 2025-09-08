'use client'

import { useEffect, useRef, useState } from 'react'
import Plotly from 'plotly.js-dist-min'
import Papa from 'papaparse'

export default function CovidImpactChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadDataAndCreateChart()
  }, [])

  const loadDataAndCreateChart = async () => {
    try {
      setIsLoading(true)
      
      // Load your industry comparison data
      const response = await fetch('/data/industry_comparison_covid.csv')
      const csvText = await response.text()
      
      // Parse CSV data
      const parsedData = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      })
      
      if (parsedData.errors.length > 0) {
        throw new Error('CSV parsing failed')
      }

      // Transform data for Plotly
      const industries = parsedData.data.map(row => row.industry_name || row.Industry_Name)
      const changes = parsedData.data.map(row => row.employment_change_pct || row.Employment_Change_Pct)
      
      // Sort by impact (most negative first)
      const sortedData = industries.map((industry, i) => ({
        industry,
        change: changes[i]
      })).sort((a, b) => a.change - b.change)

      const sortedIndustries = sortedData.map(d => d.industry)
      const sortedChanges = sortedData.map(d => d.change)

      // Create colour scheme
      const colors = sortedChanges.map(value => {
        if (value < -10) return '#dc2626' // Deep red for severe impact
        if (value < -5) return '#ea580c'  // Orange-red
        if (value < 0) return '#f59e0b'   // Orange
        return '#22c55e'                  // Green for positive
      })

      // Highlight Arts & Recreation
      const highlightColors = colors.map((color, i) => {
        const industry = sortedIndustries[i]
        return industry.includes('Arts') || industry.includes('Recreation') 
          ? '#dc2626' 
          : color
      })

      const data = [{
        x: sortedChanges,
        y: sortedIndustries,
        type: 'bar',
        orientation: 'h',
        marker: {
          color: highlightColors,
          line: {
            color: 'rgba(0,0,0,0.1)',
            width: 1
          }
        },
        text: sortedChanges.map(val => `${val > 0 ? '+' : ''}${val.toFixed(1)}%`),
        textposition: 'outside',
        textfont: {
          size: 12,
          color: '#1f2937'
        },
        hovertemplate: '<b>%{y}</b><br>' +
                      'Employment Change: %{x:.1f}%<br>' +
                      '<extra></extra>'
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
        margin: { l: 200, r: 80, t: 100, b: 80 },
        height: 500,
        annotations: [{
          x: Math.min(...sortedChanges) * 0.8,
          y: sortedIndustries.findIndex(name => name.includes('Arts') || name.includes('Recreation')),
          text: '🎭 Arts hit hardest',
          showarrow: true,
          arrowhead: 2,
          arrowcolor: '#dc2626',
          font: { color: '#dc2626', size: 12, weight: 'bold' },
          bgcolor: 'white',
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
          width: 800,
          scale: 2
        }
      }

      Plotly.newPlot(chartRef.current, data, layout, config)
      setIsLoading(false)

    } catch (err) {
      console.error('Chart loading error:', err)
      setError('Failed to load chart data. Please check the CSV file path.')
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
          📊 Loading chart data...
        </div>
      )}
      <div ref={chartRef} style={{ width: '100%' }} />
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#6b7280', 
        fontSize: '0.875rem' 
      }}>
        Source: ABS Labour Account. Interactive chart - hover for details, use toolbar to zoom/download.
      </p>
    </div>
  )
}
