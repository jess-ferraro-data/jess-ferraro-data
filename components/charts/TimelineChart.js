'use client'

import { useEffect, useRef } from 'react'

export default function TimelineChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const timelineData = [
      {
        date: 'March 2020',
        title: 'First Restrictions',
        description: 'Gathering limits of 500, then 100 people effectively shut down most performance venues overnight.',
        type: 'negative'
      },
      {
        date: 'April 2020',
        title: 'Industry Shutdown',
        description: 'Major festivals cancelled, theatres closed indefinitely, film productions halted across the country.',
        type: 'negative'
      },
      {
        date: 'June 2020',
        title: 'Rock Bottom',
        description: 'Employment reached its lowest point: 127,000 people, down from 150,000 pre-pandemic.',
        type: 'negative'
      },
      {
        date: 'August 2020',
        title: 'Digital Pivot',
        description: 'Streaming platforms boom, virtual events launch, creative industries embrace online delivery.',
        type: 'neutral'
      },
      {
        date: 'December 2021',
        title: 'Recovery Begins',
        description: 'Live events return with COVID-safe protocols, employment starts climbing back.',
        type: 'positive'
      },
      {
        date: 'June 2023',
        title: 'New Normal',
        description: 'Hybrid models established, employment reaches 80% of pre-pandemic levels.',
        type: 'positive'
      },
      {
        date: 'December 2024',
        title: 'Resilient Recovery',
        description: 'Arts sector achieves 86% recovery rate, ranking 2nd among service industries.',
        type: 'positive'
      }
    ]

    if (chartRef.current) {
      createTimelineChart(timelineData, chartRef.current)
    }
  }, [])

  const createTimelineChart = (data, container) => {
    container.innerHTML = `
      <div style="background: #f8fafc; padding: 3rem 2rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h3 style="text-align: center; margin-bottom: 3rem; color: #1a202c; font-size: 1.5rem; font-weight: 700;">
          Timeline: Arts Industry COVID Journey
        </h3>
        
        <!-- Desktop timeline -->
        <div style="position: relative; max-width: 800px; margin: 0 auto; padding: 2rem 0;" class="timeline-desktop">
          <!-- Central timeline line -->
          <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: linear-gradient(to bottom, #dc2626, #ea580c, #f59e0b, #22c55e); transform: translateX(-50%); z-index: 1;"></div>
          
          ${data.map((item, index) => {
            const isLeft = index % 2 === 0;
            return `
            <!-- Timeline item ${index + 1} -->
            <div style="position: relative; margin-bottom: ${index === data.length - 1 ? '0' : '5rem'}; display: flex; align-items: center; min-height: 120px;">
              
              ${isLeft ? `
                <!-- Left side content -->
                <div style="
                  width: 42%; 
                  background: white; 
                  padding: 2rem; 
                  border-radius: 12px; 
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
                  border: 1px solid #e2e8f0;
                  border-left: 4px solid ${
                    item.type === 'negative' ? '#dc2626' : 
                    item.type === 'positive' ? '#22c55e' : '#f59e0b'
                  };
                  margin-right: auto;
                ">
                  <div style="
                    font-size: 0.875rem; 
                    color: ${
                      item.type === 'negative' ? '#dc2626' : 
                      item.type === 'positive' ? '#22c55e' : '#f59e0b'
                    }; 
                    font-weight: 700; 
                    text-transform: uppercase; 
                    letter-spacing: 0.05em; 
                    margin-bottom: 0.5rem;
                  ">
                    ${item.date}
                  </div>
                  <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #1a202c;">
                    ${item.title}
                  </div>
                  <div style="color: #4a5568; line-height: 1.6;">
                    ${item.description}
                  </div>
                </div>
                
                <!-- Spacer for center -->
                <div style="width: 16%;"></div>
                
                <!-- Empty space on right -->
                <div style="width: 42%;"></div>
              ` : `
                <!-- Empty space on left -->
                <div style="width: 42%;"></div>
                
                <!-- Spacer for center -->
                <div style="width: 16%;"></div>
                
                <!-- Right side content -->
                <div style="
                  width: 42%; 
                  background: white; 
                  padding: 2rem; 
                  border-radius: 12px; 
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
                  border: 1px solid #e2e8f0;
                  border-left: 4px solid ${
                    item.type === 'negative' ? '#dc2626' : 
                    item.type === 'positive' ? '#22c55e' : '#f59e0b'
                  };
                  margin-left: auto;
                ">
                  <div style="
                    font-size: 0.875rem; 
                    color: ${
                      item.type === 'negative' ? '#dc2626' : 
                      item.type === 'positive' ? '#22c55e' : '#f59e0b'
                    }; 
                    font-weight: 700; 
                    text-transform: uppercase; 
                    letter-spacing: 0.05em; 
                    margin-bottom: 0.5rem;
                  ">
                    ${item.date}
                  </div>
                  <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #1a202c;">
                    ${item.title}
                  </div>
                  <div style="color: #4a5568; line-height: 1.6;">
                    ${item.description}
                  </div>
                </div>
              `}
              
              <!-- Timeline dot positioned absolutely on the central line -->
              <div style="
                width: 20px; 
                height: 20px; 
                background: ${
                  item.type === 'negative' ? '#dc2626' : 
                  item.type === 'positive' ? '#22c55e' : '#f59e0b'
                }; 
                border-radius: 50%; 
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 3; 
                box-shadow: 0 0 0 4px white, 0 0 0 6px ${
                  item.type === 'negative' ? '#dc2626' : 
                  item.type === 'positive' ? '#22c55e' : '#f59e0b'
                };
              "></div>
            </div>
          `;
          }).join('')}
        </div>
        
        <!-- Mobile-friendly version -->
        <div style="display: none;" class="timeline-mobile">
          ${data.map((item, index) => `
            <div style="margin-bottom: 2rem; position: relative; padding-left: 3rem;">
              <div style="
                width: 16px; 
                height: 16px; 
                background: ${
                  item.type === 'negative' ? '#dc2626' : 
                  item.type === 'positive' ? '#22c55e' : '#f59e0b'
                }; 
                border-radius: 50%; 
                position: absolute; 
                left: 0; 
                top: 0.5rem;
                box-shadow: 0 0 0 3px white, 0 0 0 5px ${
                  item.type === 'negative' ? '#dc2626' : 
                  item.type === 'positive' ? '#22c55e' : '#f59e0b'
                };
              "></div>
              ${index !== data.length - 1 ? `
                <div style="
                  position: absolute;
                  left: 7px;
                  top: 1.5rem;
                  bottom: -2rem;
                  width: 2px;
                  background: #e2e8f0;
                "></div>
              ` : ''}
              <div style="
                background: white; 
                padding: 1.5rem; 
                border-radius: 8px; 
                border-left: 3px solid ${
                  item.type === 'negative' ? '#dc2626' : 
                  item.type === 'positive' ? '#22c55e' : '#f59e0b'
                };
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
              ">
                <div style="
                  font-size: 0.75rem; 
                  color: ${
                    item.type === 'negative' ? '#dc2626' : 
                    item.type === 'positive' ? '#22c55e' : '#f59e0b'
                  }; 
                  font-weight: 700; 
                  text-transform: uppercase; 
                  letter-spacing: 0.05em; 
                  margin-bottom: 0.5rem;
                ">
                  ${item.date}
                </div>
                <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: #1a202c;">
                  ${item.title}
                </div>
                <div style="color: #4a5568; line-height: 1.5; font-size: 0.9rem;">
                  ${item.description}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <p style="text-align: center; margin-top: 2rem; color: #6b7280; font-size: 0.9rem;">
          Key milestones in Australia's arts sector COVID-19 journey
        </p>
        
        <style>
          @media (max-width: 768px) {
            .timeline-desktop { display: none !important; }
            .timeline-mobile { display: block !important; }
          }
          @media (min-width: 769px) {
            .timeline-desktop { display: block !important; }
            .timeline-mobile { display: none !important; }
          }
        </style>
      </div>
    `
  }

  return <div ref={chartRef} style={{ margin: '2rem 0' }} />
}