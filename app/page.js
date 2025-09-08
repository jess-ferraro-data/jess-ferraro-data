export default function Home() {
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
            Data Analyst & Scientist
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
            Transforming complex datasets into actionable insights through 
            advanced analytics, statistical modelling, and compelling data storytelling. 
            Specialising in economic impact analysis and industry trends.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <a href="/projects/arts-employment" style={{
              background: 'white',
              color: '#0f766e',
              padding: '0.875rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              border: '2px solid white'
            }}>
              🎭 View Featured Analysis
            </a>
            <a href="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              textDecoration: 'none',
              border: '2px solid white',
              transition: 'all 0.2s ease'
            }}>
              Get In Touch
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>440k+</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Data Points Analysed</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>10yrs</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Time Series Coverage</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>7</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Industries Compared</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>3</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '500' }}>Analysis Phases</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section style={{ padding: '5rem 0', background: '#134e4a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: 'white' }}>Core Capabilities</h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#a7f3d0', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Delivering end-to-end data science solutions from API integration to policy recommendations
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '1px solid #14b8a6', borderRadius: '0.75rem', padding: '1.5rem', borderLeft: '4px solid #14b8a6' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#5eead4', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📊 Statistical Analysis
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#a7f3d0' }}>
                Advanced statistical modelling, trend analysis, and comparative frameworks. 
                Experienced with regression analysis, time series decomposition, and recovery metrics.
              </div>
            </div>
            
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '1px solid #14b8a6', borderRadius: '0.75rem', padding: '1.5rem', borderLeft: '4px solid #5eead4' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#5eead4', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🔧 Technical Implementation
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#a7f3d0' }}>
                Python (Pandas, NumPy, Plotly), API integration, automated data pipelines, 
                and interactive visualisation development for web deployment.
              </div>
            </div>
            
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '1px solid #14b8a6', borderRadius: '0.75rem', padding: '1.5rem', borderLeft: '4px solid #2dd4bf' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#5eead4', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📈 Business Intelligence
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#a7f3d0' }}>
                Industry benchmarking, economic impact assessment, and actionable 
                insights generation for policy and strategic decision-making.
              </div>
            </div>
            
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '1px solid #14b8a6', borderRadius: '0.75rem', padding: '1.5rem', borderLeft: '4px solid #99f6e4' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#5eead4', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎯 Data Storytelling
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#a7f3d0' }}>
                Multi-phase narrative development, stakeholder communication, 
                and publication-ready visualisations for technical and executive audiences.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section style={{ padding: '5rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: 'white' }}>Featured Analysis</h2>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            borderRadius: '1rem', 
            padding: '2rem', 
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#1f2937'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '4rem', lineHeight: 1, minWidth: '80px' }}>🎭</div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem', color: '#1f2937' }}>
                  The Arts Bounce Back
                </h3>
                <p style={{ color: '#0f766e', margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
                  Australian Employment Recovery Analysis
                </p>
              </div>
            </div>
            
            <p style={{ marginBottom: '2rem', lineHeight: 1.7, color: '#374151', fontSize: '1.125rem' }}>
              Comprehensive 3-phase analysis tracking Australia&apos;s Arts & Recreation sector through 
              COVID-19 disruption and recovery. Combines ABS Labour Account data, statistical modelling, 
              and industry benchmarking to reveal compelling insights about economic resilience.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #fecaca' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '0.5rem' }}>-15.5%</div>
                <div style={{ fontSize: '0.875rem', color: '#7f1d1d', fontWeight: 500 }}>Peak Decline</div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.5rem' }}>86%</div>
                <div style={{ fontSize: '0.875rem', color: '#14532d', fontWeight: 500 }}>Recovery Rate</div>
              </div>
              <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #bfdbfe' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>#2</div>
                <div style={{ fontSize: '0.875rem', color: '#1e3a8a', fontWeight: 500 }}>Recovery Ranking</div>
              </div>
              <div style={{ background: '#faf5ff', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #e9d5ff' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.5rem' }}>150k+</div>
                <div style={{ fontSize: '0.875rem', color: '#581c87', fontWeight: 500 }}>Current Employment</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/projects/arts-employment" style={{
                background: '#0f766e',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                📊 Explore Full Analysis
              </a>
              <a href="/projects/arts-employment#technical" style={{
                background: 'transparent',
                color: '#0f766e',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid #0f766e',
                transition: 'all 0.2s ease'
              }}>
                🔧 View Technical Implementation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Value Proposition */}
      <section style={{ padding: '5rem 0', background: '#115e59' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: 'white' }}>Why Hire Me?</h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#a7f3d0', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Demonstrated ability to deliver publication-quality analysis with real business impact
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>Government Ready</h3>
              </div>
              <p style={{ color: '#a7f3d0', marginBottom: '1rem', lineHeight: 1.6 }}>
                Experience with official government datasets, ABS data standards, 
                and policy-relevant analysis frameworks.
              </p>
              <ul style={{ fontSize: '0.875rem', color: '#ccfbf1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ ABS API integration expertise</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Economic impact assessment</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Industry benchmarking</li>
                //<li>✓ Policy recommendation development</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>Tech Industry Focus</h3>
              </div>
              <p style={{ color: '#a7f3d0', marginBottom: '1rem', lineHeight: 1.6 }}>
                Modern tech stack, API-first approach, and scalable analysis 
                pipelines built for data team environments.
              </p>
              <ul style={{ fontSize: '0.875rem', color: '#ccfbf1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Python data science stack</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Interactive web visualisation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Automated data pipelines</li>
                <li>✓ Version control & collaboration</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>Business Impact</h3>
              </div>
              <p style={{ color: '#a7f3d0', marginBottom: '1rem', lineHeight: 1.6 }}>
                Focus on actionable insights and stakeholder communication, 
                not just technical implementation.
              </p>
              <ul style={{ fontSize: '0.875rem', color: '#ccfbf1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Executive-level reporting</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Data storytelling expertise</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Multi-audience communication</li>
                <li>✓ Strategic recommendation focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to discuss your next data project?
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Whether you need economic impact analysis, industry benchmarking, or end-to-end 
              data pipeline development, let&apos;s explore how data can drive your decisions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                background: '#0f766e',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Start a Conversation
              </a>
              <a href="/projects" style={{
                background: 'transparent',
                color: '#0f766e',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid #0f766e'
              }}>
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}