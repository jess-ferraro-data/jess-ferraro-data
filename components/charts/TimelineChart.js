'use client'

import { useEffect, useRef, useState } from 'react'

export default function TimelineChart() {
  const chartRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataSource, setDataSource] = useState('loading')

  // Your actual CSV data embedded as fallback
  const fallbackTimelineData = [
    { quarter: '2019-Q1', value: -3.461673954235 },
    { quarter: '2019-Q1', value: 1.526308907985 },
    { quarter: '2019-Q2', value: 4.100008421607 },
    { quarter: '2019-Q2', value: 1.911836352471 },
    { quarter: '2019-Q3', value: 1.877252252107 },
    { quarter: '2019-Q3', value: 2.076369888656 },
    { quarter: '2019-Q4', value: 0.888786671228 },
    { quarter: '2019-Q4', value: 3.198899655298 },
    { quarter: '2020-Q1', value: -3.841130937571 },
    { quarter: '2020-Q1', value: -0.395015216318 },
    { quarter: '2020-Q2', value: -15.492886127534 },
    { quarter: '2020-Q2', value: -15.471201760077 },
    { quarter: '2020-Q3', value: 4.890666354404 },
    { quarter: '2020-Q3', value: 2.559287641133 },
    { quarter: '2020-Q4', value: 2.599340295429 },
    { quarter: '2020-Q4', value: 2.414478127414 },
    { quarter: '2021-Q1', value: -0.596710782911 },
    { quarter: '2021-Q1', value: 0.591552377125 },
    { quarter: '2021-Q2', value: -0.227840124087 },
    { quarter: '2021-Q2', value: -1.466372062246 },
    { quarter: '2021-Q3', value: -1.611303226651 },
    { quarter: '2021-Q3', value: -10.967537497674 },
    { quarter: '2021-Q4', value: 0.115023258387 },
    { quarter: '2021-Q4', value: 7.58426548357 },
    { quarter: '2022-Q1', value: 5.629639379972 },
    { quarter: '2022-Q1', value: 2.654374305493 },
    { quarter: '2022-Q2', value: 13.756169726651 },
    { quarter: '2022-Q2', value: 3.542883456095 },
    { quarter: '2022-Q3', value: -6.660909715016 },
    { quarter: '2022-Q3', value: 2.140214917704 },
    { quarter: '2022-Q4', value: 2.049515379216 },
    { quarter: '2022-Q4', value: -0.122531362065 },
    { quarter: '2023-Q1', value: 3.540352436899 },
    { quarter: '2023-Q1', value: 4.486571086514 },
    { quarter: '2023-Q2', value: 5.895553233641 },
    { quarter: '2023-Q2', value: 9.470612512284 },
    { quarter: '2023-Q3', value: 5.71525077257 },
    { quarter: '2023-Q3', value: 4.415893538134 },
    { quarter: '2023-Q4', value: 1.17940829608 },
    { quarter: '2023-Q4', value: 2.734734185789 },
    { quarter: '2024-Q1', value: -1.110228305215 },
    { quarter: '2024-Q1', value: 3.33819137578 },
    { quarter: '2024-Q2', value: -7.958469925978 },
    { quarter: '2024-Q2', value: -3.55248783891 },
    { quarter: '2024-Q3', value: -3.366356064472 },
    { quarter: '2024-Q3', value: -3.281125739653 },
    { quarter: '2024-Q4', value: 0.18600057622 },
    { quarter: '2024-Q4', value: -1.402808651437 }
  ]

  useEffect(() => {
    const loadDataAndCreateChart = async () => {
      try {
        const Plotly = (await import('plotly.js-dist-min')).default
        
        setIsLoading(true)
        
        let rawTimelineData
        let dataSource = 'fallback'
        
        // Try to load actual CSV data first
        try {
          const Papa = (await import('papaparse')).default
          
          // Try multiple potential paths for production builds
          const possiblePaths = [
            '/data/timeline_data_m62.csv',
            './data/timeline_data_m62.csv',
            '/public/data/timeline_data_m62.csv',
            `${process.env.NODE_ENV === 'production' ? '' : ''}/data/timeline_data_m62.csv`
          ]
          
          let csvData = null
          for (const path of possiblePaths) {
            try {
              const response = await fetch(path)
              if (response.ok) {
                csvData = await response.text()
                console.log(`✅ CSV loaded from: ${path}`)
                dataSource = 'csv'
                break
              }
            } catch (pathError) {
              console.log(`❌ Path failed: ${path}`)
              continue
            }
          }
          
          if (csvData) {
            const parsedData = Papa.parse(csvData, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true
            })
            
            rawTimelineData = parsedData.data
              .map(row => ({
                quarter: row.TIME_PERIOD,
                value: row.OBS_VALUE
              }))
              .filter(row => row.quarter && row.value !== null && row.value !== undefined)
            
            console.log(`✅ Using CSV data: ${rawTimelineData.length} points`)
          } else {
            throw new Error('No valid CSV path found')
          }
          
        } catch (csvError) {
          console.log('📊 CSV loading failed, using embedded fallback data')
          rawTimelineData = fallbackTimelineData
          dataSource = 'fallback'
        }

        // Process the data - handle duplicates by averaging or taking first value
        const quarterMap = new Map()
        
        rawTimelineData.forEach(item => {
          if (!quarterMap.has(item.quarter)) {
            quarterMap.set(item.quarter, [])
          }
          quarterMap.get(item.quarter).push(item.value)
        })
        
        // Create final dataset - average duplicate quarters
        const processedData = Array.from(quarterMap.entries())
          .map(([quarter, values]) => ({
            quarter,
            value: values.reduce((sum, val) => sum + val, 0) / values.length // Average
          }))
          .sort((a, b) => a.quarter.localeCompare(b.quarter))

        const quarters = processedData.map(d => d.quarter)
        const values = processedData.map(d => d.value)

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
            text: '<b>Arts Employment Changes: 2019-2024</b><br><sub>Employment percentage changes (quarterly)</sub>',
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
          ].filter(Boolean)
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
        setDataSource(dataSource)
        setIsLoading(false)

      } catch (err) {
        console.error('Timeline chart error:', err)
        setError(`Failed to load timeline: ${err.message}`)
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
          {/* Data source indicator */}
          {dataSource === 'fallback' && (
            <div style={{
              background: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginTop: '1rem',
              fontSize: '0.875rem',
              color: '#92400e'
            }}>
              <strong>📊 Using embedded data:</strong> CSV file not accessible in production build. 
              Chart shows your actual analysis data with duplicate quarters averaged.
            </div>
          )}
          
          <p style={{ 
            textAlign: 'center', 
            marginTop: '1rem', 
            color: '#6b7280', 
            fontSize: '0.875rem' 
          }}>
            Source: ABS Labour Account M62 (Employed persons - Percentage changes). 
            {dataSource === 'csv' ? 'Loaded from CSV file.' : 'Using embedded data.'} Interactive chart.
          </p>
          
          {/* Timeline commentary */}
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
                  2020-Q2 - Peak Impact
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Employment reached its lowest point with a -15.5% decline as lockdowns shut down venues nationwide.
                </div>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                borderLeft: '4px solid #f59e0b'
              }}>
                <div style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  2021-2022 - Volatile Recovery
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Recovery showed significant volatility with lockdowns and reopenings creating an unstable employment environment.
                </div>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e'
              }}>
                <div style={{ fontWeight: '600', color: '#22c55e', marginBottom: '0.5rem' }}>
                  2023-2024 - Stabilisation
                </div>
                <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                  Employment changes stabilised around baseline levels, indicating the sector had adapted to new operating conditions.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}