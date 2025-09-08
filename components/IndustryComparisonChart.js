'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function IndustryComparisonChart() {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const industries = [
        'Arts and Recreation',
        'Accommodation & Food', 
        'Retail Trade',
        'Professional Services',
        'Education & Training',
        'Health Care',
        'Finance & Insurance'
      ]
      
      const recoveryData = [86, 72, 94, 89, 78, 95, 91]
      const colors = ['#e74c3c', '#f39c12', '#e67e22', '#9b59b6', '#1abc9c', '#27ae60', '#3498db']
      
      const trace = {
        x: industries,
        y: recoveryData,
        type: 'bar',
        marker: {
          color: colors,
          line: {
            color: 'rgba(255,255,255,0.8)',
            width: 2
          }
        },
        text: recoveryData.map(val => `${val}%`),
        textposition: 'outside',
        hovertemplate: '<b>%{x}</b><br>Recovery: %{y}%<br><extra></extra>'
      }

      const layout = {
        title: {
          text: '<b>Industry Recovery Race: Service Sectors</b><br><sub>Employment recovery from COVID-19 lows (%)</sub>',
          font: { size: 18 },
          x: 0.5
        },
        xaxis: { 
          title: 'Industry',
          tickangle: -45,
          showgrid: false
        },
        yaxis: { 
          title: 'Recovery Percentage (%)',
          showgrid: true,
          gridwidth: 1,
          gridcolor: 'lightgray',
          range: [0, 100]
        },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white',
        font: { size: 12 },
        height: 500,
        margin: { t: 100, b: 150, l: 80, r: 40 },
        showlegend: false,
        shapes: [{
          type: 'line',
          x0: -0.5,
          x1: industries.length - 0.5,
          y0: 100,
          y1: 100,
          line: {
            color: 'green',
            width: 2,
            dash: 'dash'
          }
        }],
        annotations: [{
          x: industries.length / 2,
          y: 102,
          text: 'Full Recovery Line',
          showarrow: false,
          font: { color: 'green', size: 12 }
        }, {
          x: 'Arts and Recreation',
          y: 90,
          text: '🎭 Focus Industry',
          showarrow: true,
          arrowhead: 2,
          arrowcolor: '#e74c3c',
          font: { color: '#e74c3c', size: 12, weight: 'bold' },
          bgcolor: 'white',
          bordercolor: '#e74c3c',
          borderwidth: 1
        }]
      }

      const config = {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'autoScale2d'],
        displaylogo: false
      }

      setChartData({ data: [trace], layout, config })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div style={{ 
        background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)', 
        borderRadius: '0.5rem', 
        padding: '3rem', 
        textAlign: 'center'
      }}>
        <p style={{ color: '#64748b' }}>Loading industry comparison...</p>
      </div>
    )
  }

  if (!chartData) {
    return (
      <div style={{ 
        background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)', 
        borderRadius: '0.5rem', 
        padding: '3rem', 
        textAlign: 'center'
      }}>
        <p style={{ color: '#64748b' }}>Unable to load chart data</p>
      </div>
    )
  }

  return (
    <div style={{ 
      background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)', 
      borderRadius: '0.5rem', 
      padding: '2rem' 
    }}>
      <Plot
        data={chartData.data}
        layout={chartData.layout}
        config={chartData.config}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
      />
      <div style={{ 
        marginTop: '1rem', 
        textAlign: 'center', 
        fontSize: '0.875rem', 
        color: '#64748b' 
      }}>
        <p>
          <strong>Key Insight:</strong> Arts achieved 86% recovery, ranking 4th among service industries despite the worst initial decline.
        </p>
      </div>
    </div>
  )
}