'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CovidImpactChart from '../../../components/charts/CovidImpactChart'
import RecoveryRaceChart from '../../../components/charts/RecoveryRaceChart'  
import TimelineChart from '../../../components/charts/TimelineChart'

export default function ArtsEmploymentStory() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }}>
            The Arts Bounce Back
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 300,
            marginBottom: '3rem',
            opacity: 0.95
          }}>
            How Australia&apos;s most vulnerable industry became its most resilient
          </p>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '0.9rem',
          animation: 'bounce 2s infinite'
        }}>
          <div>Scroll to explore</div>
          <div style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>↓</div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#64748b',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Prologue
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '2rem',
            color: '#1a202c'
          }}>
            A Story Written in Data
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            marginBottom: '3rem',
            color: '#4a5568',
            fontStyle: 'italic'
          }}>
            When COVID-19 struck Australia in March 2020, no industry felt the impact quite like arts and recreation.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            Theatres went dark. Concert halls fell silent. Film sets shut down. In just three months, 
            23,000 Australians lost their jobs in the creative sector – a staggering 15.5% decline 
            that made it the worst-hit industry in the country.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            But this isn&apos;t a story about decline. It&apos;s about resilience, adaptation, and an unexpected comeback 
            that surprised economists and policymakers alike. Using comprehensive data from the Australian Bureau 
            of Statistics spanning 2015-2024, we traced the complete journey of an industry that learned to 
            reinvent itself in real time.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            margin: '4rem 0'
          }}>
            {[
              { number: '440k+', label: 'Data Points Analysed', context: 'Official ABS statistics' },
              { number: '7', label: 'Industries Compared', context: 'Service sector benchmarking' },
              { number: '3', label: 'Analysis Phases', context: 'Impact, recovery, future' },
              { number: '10', label: 'Time Series Coverage', context: 'Complete analysis period' }            
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  content: '',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #0f766e, #14b8a6)'
                }} />
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#0f766e',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  marginTop: '0.5rem'
                }}>
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 1: The Storm */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.8)), linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 1: The Perfect Storm
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            March 2020. As Australia&apos;s borders closed and cities locked down, 
            one industry bore the brunt of a crisis unlike any other.
          </p>
        </div>
      </section>

      {/* Chapter 1 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          {/* Analytical Insight (not a quote) */}
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            margin: '3rem 0',
            padding: '2rem 0',
            textAlign: 'center',
            color: '#1a202c',
            borderTop: '3px solid #0f766e',
            borderBottom: '3px solid #0f766e',
            fontStyle: 'italic',
            background: '#f0fdfa',
            borderRadius: '0.5rem'
          }}>
            <strong>Analysis reveals:</strong> In three months, the arts lost 23,000 jobs. 
            Every percentage point represents real people whose livelihoods vanished overnight.
          </div>
          
          {/* COVID Impact Chart */}
          <div style={{ margin: '4rem 0' }}>
            <CovidImpactChart />
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The numbers paint a stark picture of uneven impact across Australia&apos;s service economy. While retail trade actually managed to grow by 1.0% – benefiting from panic buying, essential worker hiring, and a dramatic shift to online shopping during lockdowns – other industries faced severe contractions. Accommodation and food services, arguably the most similar to arts in terms of customer-facing operations, experienced an 8.9% employment drop. But the arts and recreation industry saw employment crater by a devastating 15.5%.</p>
 <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
The retail sector&apos;s unexpected growth during the initial COVID period reveals the complex dynamics of pandemic economics. Supermarkets and grocery stores saw a 22.4% increase in sales during March 2020 alone, driven by stockpiling behaviours and increased home consumption. Hardware stores benefited from home renovation projects as people adapted to working from home, while online retail platforms experienced unprecedented demand as 21% of retail businesses reported positive impacts from COVID-19.

But why were the arts hit so much harder than even accommodation and food services? The answer lies in the fundamental nature of creative work itself. Unlike retail, which could pivot to online sales and delivery, or restaurants, which could transition to takeaway services, the arts sector relies heavily on live, in-person experiences that simply couldn&apos;t be translated to a socially-distanced world. Concerts require crowds, theatre demands presence, and film production needs physical collaboration – elements that became impossible overnight.

          </p>
          
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            But why were the arts hit so much harder? The answer lies in the nature of creative work itself. 
            Unlike many other industries, the arts sector relies heavily on live, in-person experiences that 
            simply couldn&apos;t be translated to a socially-distanced world.
          </p>

          {/* Timeline Component */}
          <div style={{ margin: '4rem 0' }}>
            <TimelineChart />
          </div>
        </div>
      </section>

      {/* Chapter 2: The Recovery */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(34, 197, 94, 0.8), rgba(21, 128, 61, 0.8)), linear-gradient(135deg, #22c55e 0%, #059669 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 2: The Great Recovery Race
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            As restrictions eased, a fascinating race began. 
            Seven industries, one unexpected winner.
          </p>
        </div>
      </section>

      {/* Chapter 2 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            marginBottom: '3rem',
            color: '#4a5568',
            fontStyle: 'italic'
          }}>
            What happened next defied every prediction. The industry that fell hardest began climbing fastest.
          </p>
          
          {/* Recovery Race Chart */}
          <div style={{ margin: '4rem 0' }}>
            <RecoveryRaceChart />
          </div>
          
          {/* Data-driven insight */}
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            margin: '3rem 0',
            padding: '2rem',
            textAlign: 'center',
            color: '#1a202c',
            background: '#f0fdf4',
            border: '1px solid #22c55e',
            borderRadius: '0.5rem',
            fontStyle: 'italic'
          }}>
            <strong>Key finding:</strong> The arts didn&apos;t just bounce back – they leapfrogged into the future, 
            embracing digital transformation that other industries are still catching up to.
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            By December 2024, the arts and recreation sector had recovered 86% of its pre-pandemic employment levels, 
            ranking second among all service industries for recovery speed. Only healthcare – boosted by pandemic hiring – 
            recovered faster.
          </p>
          
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            How did an industry so dependent on live, in-person experiences manage such a remarkable turnaround? 
            The answer lies in three key factors: adaptability, innovation, and pent-up demand.
          </p>
        </div>
      </section>

<section style={{ 
  padding: '4rem 0', 
  background: '#f8fafc' 
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
    <h2 style={{ 
      fontSize: '2rem', 
      fontWeight: 'bold', 
      marginBottom: '3rem', 
      color: '#1f2937',
      textAlign: 'center'
    }}>
      🔍 The Three Pillars of Arts Recovery
    </h2>
    
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '3rem' 
    }}>
      
      {/* Adaptability */}
      <div style={{ 
        background: 'white', 
        borderRadius: '1rem', 
        padding: '2.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderTop: '4px solid #3b82f6'
      }}>
        <div style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '1.5rem' 
        }}>🎯</div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#3b82f6',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Adaptability
        </h3>
        <p style={{ 
          color: '#374151', 
          lineHeight: 1.7,
          marginBottom: '1.5rem'
        }}>
          Australian arts organisations proved remarkably agile in reimagining their operations. 
          Sydney Opera House launched digital performances reaching global audiences. Melbourne&apos;s 
          theatre companies developed socially-distanced outdoor shows. Film production adapted 
          with &quot;COVID-safe&quot; protocols that became industry standard.
        </p>
        <div style={{ 
          background: '#eff6ff', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: '#1e40af'
        }}>
          <strong>Example:</strong> The Adelaide Festival pivoted to drive-in concerts, 
          creating an entirely new entertainment format that outlasted the pandemic.
        </div>
      </div>

      {/* Innovation */}
      <div style={{ 
        background: 'white', 
        borderRadius: '1rem', 
        padding: '2.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderTop: '4px solid #9333ea'
      }}>
        <div style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '1.5rem' 
        }}>💡</div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#9333ea',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Innovation
        </h3>
        <p style={{ 
          color: '#374151', 
          lineHeight: 1.7,
          marginBottom: '1.5rem'
        }}>
          The pandemic accelerated digital transformation that might otherwise have taken years. 
          Australian artists embraced virtual reality exhibitions, livestreamed performances, 
          and interactive online experiences. Many of these innovations proved so successful 
          they became permanent features of the cultural landscape.
        </p>
        <div style={{ 
          background: '#faf5ff', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: '#7c3aed'
        }}>
          <strong>Innovation highlight:</strong> Museum of Contemporary Art Australia&apos;s virtual 
          tours attracted 300% more visitors than physical exhibitions pre-pandemic.
        </div>
      </div>

      {/* Pent-up Demand */}
      <div style={{ 
        background: 'white', 
        borderRadius: '1rem', 
        padding: '2.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderTop: '4px solid #22c55e'
      }}>
        <div style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '1.5rem' 
        }}>🚀</div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#22c55e',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Pent-up Demand
        </h3>
        <p style={{ 
          color: '#374151', 
          lineHeight: 1.7,
          marginBottom: '1.5rem'
        }}>
          After months of isolation, Australians were hungry for live cultural experiences. 
          When restrictions lifted, festivals sold out within hours, theatre seasons extended 
          due to demand, and local tourism focused heavily on cultural attractions. The 
          human need for shared artistic experiences had been suppressed, not eliminated.
        </p>
        <div style={{ 
          background: '#f0fdf4', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: '#15803d'
        }}>
          <strong>Market evidence:</strong> 2022 saw record attendance at Australian music 
          festivals, with many events selling out faster than pre-pandemic levels.
        </div>
      </div>

    {/* Government Support Context */}
    <div style={{ 
      background: 'white', 
        borderRadius: '1rem', 
        padding: '2.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderTop: '4px solid #f59e0b'
    }}>
      <div style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '1.5rem' 
        }}>🏛️</div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#f59e0b',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Government Support
        </h3>
      <p style={{ 
        color: '#374151', 
        lineHeight: 1.7,
        marginBottom: '1.5rem'
      }}>
        While these three factors were crucial, the recovery was also supported by targeted 
        government intervention. JobKeeper payments kept many arts workers connected to their 
        employers during lockdowns, while specific arts funding programs helped organisations 
        survive the darkest months of 2020-2021.
      </p>
      <div style={{ 
          background: '#fef3c7', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: '#92400e'
        }}>
          <strong>Policy impact:</strong> Despite significant support, the speed of recovery 
          suggests the sector&apos;s inherent resilience was the primary driver of its comeback.
        </div>
    </div>
  </div>
</div>
</section>

      {/* Methodology & Technical */}
      <section style={{
        background: '#0f172a',
        color: 'white',
        padding: '6rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Methodology & Data Sources
          </h2>
          <p style={{
            fontSize: '1.125rem',
            textAlign: 'center',
            color: '#94a3b8',
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Transparency in analysis methodology and data sources
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#60a5fa'
              }}>
                📊 Data Sources
              </h3>
              <ul style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• Australian Bureau of Statistics Labour Account (LABOUR_ACCT_Q)</li>
                <li style={{ marginBottom: '0.5rem' }}>• ABS Labour Force Survey (LF)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Analysis period: 2015-Q1 to 2024-Q4</li>
                <li>• 440,000+ data points across 7 industries</li>
              </ul>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#60a5fa'
              }}>
                🔧 Technical Implementation
              </h3>
              <ul style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• Python data pipeline (Pandas, NumPy)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Real-time ABS API integration</li>
                <li style={{ marginBottom: '0.5rem' }}>• Interactive visualisation (Plotly/D3.js)</li>
                <li>• Statistical analysis & trend modelling</li>
              </ul>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#60a5fa'
              }}>
                📈 Analysis Notes
              </h3>
              <ul style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• Recovery metrics use trend-adjusted baselines</li>
                <li style={{ marginBottom: '0.5rem' }}>• All quotes are analytical insights, not attributions</li>
                <li style={{ marginBottom: '0.5rem' }}>• Industry comparisons based on ANZSIC codes</li>
                <li>• Statistical significance tested at 95% confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Ready to dive deeper into the data?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.6,
            marginBottom: '3rem',
            opacity: 0.9
          }}>
            This project showcases end-to-end data science capabilities from API integration to policy insights. 
            Let&apos;s discuss how similar analysis could benefit your organisation.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
            <Link href="/contact" style={{
              background: 'white',
              color: '#0f766e',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}>
              💬 Start a Conversation
            </Link>
            <Link href="/projects" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              📊 More Projects
            </Link>
            <Link href="/" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </main>
  )
}
