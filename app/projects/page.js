'use client'

import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div style={{ background: '#115e59', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #115e59 0%, #0f766e 50%, #134e4a 100%)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Data Projects Portfolio
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
            Comprehensive analyses showcasing advanced statistical methods, data pipeline development,
            and policy-relevant insights across Australian industries and economic trends.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>2</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Featured Analyses</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>440k+</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Data Points</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>2</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Languages</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>7</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Analysis Phases</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '5rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: 'white' }}>
            Featured Analyses
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Arts Project Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#1f2937'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'start',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '5rem', lineHeight: 1 }}>🎭</div>

                <div>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                  }}>
                    The Arts Bounce Back
                  </h3>
                  <p style={{
                    color: '#0f766e',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}>
                    Australian Employment Recovery Analysis
                  </p>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: 1.7,
                    fontSize: '1.125rem'
                  }}>
                    Comprehensive 3-phase analysis tracking Australia&apos;s Arts &amp; Recreation sector through
                    COVID-19 disruption and recovery, revealing insights about economic resilience and
                    industry adaptation strategies.
                  </p>
                </div>

                <div style={{
                  background: '#f0fdf4',
                  border: '2px solid #22c55e',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  textAlign: 'center',
                  minWidth: '120px'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.25rem' }}>
                    COMPLETE
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#15803d' }}>Aug 2025</div>
                </div>
              </div>

              {/* Project Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #fecaca' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '0.25rem' }}>-15.5%</div>
                  <div style={{ fontSize: '0.875rem', color: '#7f1d1d' }}>Peak Employment Decline</div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.25rem' }}>86%</div>
                  <div style={{ fontSize: '0.875rem', color: '#14532d' }}>Recovery Rate Achieved</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bfdbfe' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.25rem' }}>#2</div>
                  <div style={{ fontSize: '0.875rem', color: '#1e3a8a' }}>Industry Recovery Ranking</div>
                </div>
                <div style={{ background: '#faf5ff', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #e9d5ff' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.25rem' }}>10yr</div>
                  <div style={{ fontSize: '0.875rem', color: '#581c87' }}>Time Series Analysis</div>
                </div>
              </div>

              {/* Technical Stack */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
                  🛠️ Technical Stack &amp; Methods
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                  {[
                    { tag: 'Python', sub: 'Pandas, NumPy, Plotly' },
                    { tag: 'ABS API', sub: 'Real-time data integration' },
                    { tag: 'Statistical Analysis', sub: 'Trend modelling, recovery metrics' },
                    { tag: 'Data Visualisation', sub: 'Interactive charts, dashboards' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ background: '#f0fdfa', color: '#0f766e', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                        {item.tag}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/projects/arts-employment" style={{ background: '#0f766e', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                  📊 Explore Full Analysis
                </Link>
                <Link href="/projects/arts-employment#technical" style={{ background: 'transparent', color: '#0f766e', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', border: '2px solid #0f766e' }}>
                  🔧 Technical Deep Dive
                </Link>
              </div>
            </div>

            {/* Wage Compliance Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#1f2937'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'start',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '5rem', lineHeight: 1 }}>⚖️</div>

                <div>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                  }}>
                    When the System Gets It Wrong
                  </h3>
                  <p style={{
                    color: '#0f766e',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}>
                    Wage Compliance Analysis in R
                  </p>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: 1.7,
                    fontSize: '1.125rem'
                  }}>
                    A four-script R pipeline simulating a payroll compliance review across a three-store
                    Central Coast retail chain. Identifies $33,753 in underpayments across 20 employees
                    using segment-level entitlement reconstruction and statistical detection methods.
                  </p>
                </div>

                <div style={{
                  background: '#f0fdf4',
                  border: '2px solid #22c55e',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  textAlign: 'center',
                  minWidth: '120px'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.25rem' }}>
                    COMPLETE
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#15803d' }}>Mar 2026</div>
                </div>
              </div>

              {/* Project Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #fecaca' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '0.25rem' }}>$33,753</div>
                  <div style={{ fontSize: '0.875rem', color: '#7f1d1d' }}>Liability Identified</div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.25rem' }}>20</div>
                  <div style={{ fontSize: '0.875rem', color: '#14532d' }}>Employees Underpaid</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bfdbfe' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.25rem' }}>6,187</div>
                  <div style={{ fontSize: '0.875rem', color: '#1e3a8a' }}>Segments Analysed</div>
                </div>
                <div style={{ background: '#faf5ff', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #e9d5ff' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.25rem' }}>2</div>
                  <div style={{ fontSize: '0.875rem', color: '#581c87' }}>Violation Types</div>
                </div>
              </div>

              {/* Technical Stack */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
                  🛠️ Technical Stack &amp; Methods
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                  {[
                    { tag: 'R / tidyverse', sub: 'Data pipeline, analysis' },
                    { tag: 'ggplot2', sub: 'Custom visualisations' },
                    { tag: 'Statistical Detection', sub: 'Coefficient of variation' },
                    { tag: 'Award Compliance', sub: 'GRIA MA000004' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ background: '#f0fdfa', color: '#0f766e', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                        {item.tag}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/projects/wage-compliance" style={{ background: '#0f766e', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                  📊 Explore Full Analysis
                </Link>
                <Link href="/projects/wage-compliance#methodology" style={{ background: 'transparent', color: '#0f766e', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', border: '2px solid #0f766e' }}>
                  🔧 Methodology
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Development Journey */}
      <section style={{ padding: '5rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            color: '#1f2937'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              Portfolio Development Journey
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Each project builds upon previous methodologies while exploring new analytical territories,
              demonstrating continuous learning and diverse industry expertise for the Australian data science community.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #0f766e' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#0f766e' }}>🎭</div>
                <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>Phase 1: Foundation</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Arts employment analysis</div>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #0f766e' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#0f766e' }}>⚖️</div>
                <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>Phase 2: Expansion</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Wage compliance analysis</div>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', opacity: 0.5 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>📊</div>
                <div style={{ fontWeight: 'bold', color: '#6b7280', marginBottom: '0.25rem' }}>Phase 3: Coming Soon</div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Next analysis in development</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/projects/arts-employment" style={{ background: '#0f766e', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                🎭 Arts Employment
              </Link>
              <Link href="/projects/wage-compliance" style={{ background: '#0f766e', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                ⚖️ Wage Compliance
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: '#0f766e', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', border: '2px solid #0f766e' }}>
                💬 Discuss Future Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section style={{ padding: '5rem 0', background: '#115e59' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
              Stay Updated on New Analysis
            </h2>
            <p style={{
              color: '#a7f3d0',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Follow the development of new projects and methodology innovations.
              Connect via LinkedIn for updates on Australian data science projects and insights.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://linkedin.com/in/jessferraro"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#0077b5', color: 'white', padding: '1rem 2rem', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                💼 Connect on LinkedIn
              </a>
              <a
                href="https://github.com/jess-ferraro-data"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                💻 Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}