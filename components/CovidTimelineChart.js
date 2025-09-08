'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Papa from 'papaparse'

// Dynamically import Plotly to avoid server-side rendering issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function CovidTimelineChart() {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading chart data...')
        
        // Load your CSV file
        const response = await fetch('/data/timeline_data_M62.csv')
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`)
        }
        
        const csvText = await response.text()
        console.log('CSV loaded, first 200 chars:', csvText.substring(0, 200))
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log('Parsed data:', results.data.slice(0, 5)) // Log first 5 rows
            
            if (results.errors.length > 0) {
              console.error('Parse errors:', results.errors)
            }
            
            // Convert and clean the data
            const cleanData = results.data
              .map(row => {
                // Try different possible column names
                const quarter = row.TIME_PERIOD || row.Quarter || row.time_period || row.quarter
                const value = row.OBS_VALUE || row.Value || row.obs_value || row.value
                
                if (quarter && value !== undefined && value !== '') {
                  return {
                    quarter: quarter,
                    value: parseFloat(value)
                  }
                }
                return null
              })
              .filter(row => row !== null && !isNaN(row.value))
            
            console.log('Clean data:', cleanData.slice(0, 5))
            
            if (cleanData.length === 0) {
              throw new Error('No valid data found in CSV')
            }
            
            // Create the chart
            const trace = {
              x: cleanData.map(d => d.quarter),
              y: cleanData.map(d => d.value),
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Arts Employment Change (%)',
              line: { 
                color: '#e74c3c', 
                width: 4 
              },
              marker: { 
                size: 8, 
                color: '#e74c3c' 
              },
              hovertemplate: '<b>Arts Employment</b><br>' +
                           'Quarter: %{x}<br>' +
                           'Change: %{y:.1f}%<br>' +
                           '<extra></extra>'
            }

            const layout = {
              title: {
                text: '<b>COVID-19 Impact on Arts Employment</b><br><sub>Percentage changes in Arts & Recreation employment</sub>',
                font: { size: 18 },
                x: 0.5
              },
              xaxis: { 
                title: 'Quarter',
                showgrid: true,
                gridwidth: 1,
                gridcolor: 'lightgray'
              },
              yaxis: { 
                title: 'Employment Change (%)',
                showgrid: true,
                gridwidth: 1,
                gridcolor: 'lightgray',
                zeroline: true,
                zerolinecolor: 'black',
                zerolinewidth: 2
              },
              plot_bgcolor: 'white',
              paper_bgcolor: 'white',
              font: { size: 12 },
              height: 500,
              margin: { t: 80, b: 60, l: 80, r: 40 },
              showlegend: false
            }

            // Add COVID period highlighting if we have 2020 data
            const hasCovidData = cleanData.some(d => d.quarter.includes('2020'))
            if (hasCovidData) {
              layout.shapes = [{
                type: 'rect',
                xref: 'x',
                yref: 'paper',
                x0: '2020-Q1',
                x1: '2021-Q4',
                y0: 0,
                y1: 1,
                fillcolor: 'red',
                opacity: 0.1,
                layer: 'below',
                line: { width: 0 }
              }]
              
              layout.annotations = [{
                x: '2020-Q3',
                y: 0.95,
                xref: 'x',
                yref: 'paper',
                text: 'COVID Impact Period',
                showarrow: false,
                font: { color: 'red', size: 12 },
                bgcolor: 'white',
                bordercolor: 'red',
                borderwidth: 1
              }]
            }

            const config = {
              responsive: true,
              displayModeBar: true,
              modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'autoScale2d'],
              displaylogo: false,
              toImageButtonOptions: {
                format: 'png',
                filename: 'arts_employment_covid_impact',
                height: 500,
                width: 800,
                scale: 1
              }
            }

            setChartData({ data: [trace], layout, config })
            setLoading(false)
          },
          error: (error) => {
            console.error('Papa Parse error:', error)
            setError('Failed to parse CSV data')
            setLoading(false)
          }
        })
        
      } catch (error) {
        console.error('Error loading chart data:', error)
        setError(error.message)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="chart-container rounded-lg p-8 text-center">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-300 rounded mb-4"></div>
          <p className="text-gray-500">Loading COVID impact timeline...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="chart-container rounded-lg p-8 text-center">
        <div className="text-red-600 mb-4">
          <p className="font-semibold">Chart Loading Error</p>
          <p className="text-sm">{error}</p>
        </div>
        <div className="text-gray-500 text-sm">
          <p>Check that timeline_data_M62.csv is in the public/data/ folder</p>
          <p>Expected columns: TIME_PERIOD, OBS_VALUE</p>
        </div>
      </div>
    )
  }

  if (!chartData) {
    return (
      <div className="chart-container rounded-lg p-8 text-center">
        <p className="text-gray-500">No chart data available</p>
      </div>
    )
  }

  return (
    <div className="chart-container rounded-lg p-6">
      <Plot
        data={chartData.data}
        layout={chartData.layout}
        config={chartData.config}
        className="w-full"
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p><strong>Key Insight:</strong> This chart shows the percentage changes in Arts & Recreation employment, highlighting the severe COVID-19 impact and subsequent recovery patterns.</p>
      </div>
    </div>
  )
}