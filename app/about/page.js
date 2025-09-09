export default function AboutPage() {
  return (
    <main style={{ background: '#115e59', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #115e59 0%, #0f766e 50%, #134e4a 100%)',
        padding: '6rem 0 4rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '700', 
            marginBottom: '1.5rem', 
            lineHeight: 1.1 
          }}>
            From Apple Retail to Data Analytics
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.9, 
            lineHeight: 1.6 
          }}>
            16 years of customer-focused problem solving, now applied to uncovering 
            insights in Australian employment data. Currently a Data Analyst Intern at EY.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            color: '#1f2937',
            lineHeight: 1.7
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem', 
              color: '#0f766e',
              textAlign: 'center' 
            }}>
              My Journey to Data
            </h2>
            
            <div style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                My path to data analytics began in an unexpected place: the retail floors of Apple stores across Australia. 
                Over 16 years with Apple, I evolved from retail associate to technical support specialist, trainer, schedule planner 
                and eventually assistant to the head of Apple retail in Australia—preparing data stories for directors 
                and developing a deep appreciation for how numbers tell human stories.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                What drives my analytical approach is a combination of curiosity and neurodivergent thinking. 
                Being autistic and having ADHD means I need to understand the <em>why</em> behind results and outcomes. 
                While the world isn&apos;t as black and white as I'd sometimes prefer, diving into data to uncover 
                deeper understanding is incredibly satisfying. I love problem-solving, and data provides the 
                perfect playground for that passion.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                Today, I&apos;m a Data Analyst Intern at EY, bringing together my customer service background, 
                technical skills, and voracious appetite for learning. My academic foundation includes 
                a BA in Media & Communications with a minor in Music, and an MSc in Digital Media, while my 
                data skills come from on-the-job experience and continuous learning through platforms like Coursera and Udemy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Approach */}
      <section style={{ padding: '4rem 0', background: '#134e4a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem', 
            color: 'white' 
          }}>
            What I Bring to Data Analytics
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            textAlign: 'center', 
            color: '#a7f3d0', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            A unique blend of technical expertise, customer focus, and human-centered analytical thinking
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            
            {/* Technical Skills */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '1rem', 
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐍</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem', 
                  color: 'white' 
                }}>
                  Technical Foundation
                </h3>
              </div>
              <ul style={{ 
                color: '#a7f3d0', 
                fontSize: '0.95rem', 
                listStyle: 'none', 
                padding: 0,
                lineHeight: 1.6
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Python (Pandas, NumPy, Plotly)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ SQL for data manipulation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ API integration (ABS, web services)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Data visualisation & storytelling</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Certified Mac technician</li>
                <li>✓ AI-assisted analysis workflows</li>
              </ul>
            </div>

            {/* Analytical Approach */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '1rem', 
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem', 
                  color: 'white' 
                }}>
                  Analytical Strengths
                </h3>
              </div>
              <ul style={{ 
                color: '#a7f3d0', 
                fontSize: '0.95rem', 
                listStyle: 'none', 
                padding: 0,
                lineHeight: 1.6
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Deep-dive problem solving</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Pattern recognition & detail focus</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Customer-centric data interpretation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Workforce analytics specialisation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Data accuracy & quality assurance</li>
                <li>✓ Continuous learning mindset</li>
              </ul>
            </div>

            {/* Experience Edge */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '1rem', 
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem', 
                  color: 'white' 
                }}>
                  Professional Edge
                </h3>
              </div>
              <ul style={{ 
                color: '#a7f3d0', 
                fontSize: '0.95rem', 
                listStyle: 'none', 
                padding: 0,
                lineHeight: 1.6
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 16 years customer service excellence</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Executive-level presentation experience</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Training & knowledge transfer</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Cross-functional collaboration</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Results-driven approach</li>
                <li>✓ Adaptability in fast-paced environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section style={{ padding: '4rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            color: '#1f2937',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem', 
              color: '#0f766e' 
            }}>
              Beyond the Numbers
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎭</div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0f766e' }}>
                  Musical Theatre Passion
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Active singer and cellist, usually involved in at least one production. 
                  Dream project: analytics on show success factors and audience engagement.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0f766e' }}>
                  Central Coast Based
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Located on the Central Coast of NSW, bringing regional perspective 
                  to Australian data analysis and workforce insights.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#0f766e' }}>
                  AI-Enhanced Analysis
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Actively leveraging AI tools to supplement analysis, find new approaches, 
                  and push the boundaries of traditional data exploration.
                </p>
              </div>
            </div>
            
            <div style={{ 
              background: '#f0fdfa', 
              borderRadius: '0.75rem', 
              padding: '2rem',
              borderLeft: '4px solid #0f766e'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: '#0f766e', 
                marginBottom: '1rem',
                textAlign: 'left'
              }}>
                What Drives Me
              </h3>
              <p style={{ 
                color: '#374151', 
                fontSize: '1.125rem', 
                lineHeight: 1.7,
                textAlign: 'left'
              }}>
                I believe that behind every data point is a human story. Whether analysing employment 
                trends in Australia&apos;s arts sector or diving into workforce analytics, my focus is always 
                on understanding the <em>people</em> factor. Data isn&apos;t just numbers—it&apos;s a window into 
                human experiences, challenges, and opportunities. That perspective, combined with my 
                neurodivergent analytical strengths and customer service background, allows me to find 
                insights that others might miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 0', background: '#115e59', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            color: 'white' 
          }}>
            Let&apos;s Explore Data Together
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '2rem', 
            color: '#a7f3d0',
            lineHeight: 1.6
          }}>
            Whether you need workforce analytics, customer insights, or someone who can find 
            the human story in complex datasets, I&apos;d love to discuss how my unique background 
            can add value to your team.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" style={{
              background: 'white',
              color: '#0f766e',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}>
              💬 Get In Touch
            </a>
            <a href="/projects" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              border: '2px solid white',
              transition: 'all 0.2s ease'
            }}>
              📊 View My Work
            </a>
            <a href="https://linkedin.com/in/jessferraro" target="_blank" rel="noopener noreferrer" style={{
              background: '#0077b5',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}>
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// =============================================================================
// NEXT.JS METADATA FOR SEO
// =============================================================================
export const metadata = {
  title: 'About | Jess Ferraro - Data Analyst',
  description: 'From 16 years at Apple to Data Analytics at EY. Neurodivergent problem-solver specialising in workforce analytics and human-centered data insights on the Central Coast, NSW.',
  keywords: 'data analyst, workforce analytics, Apple career change, neurodivergent analyst, Central Coast NSW, EY intern, customer service data',
  openGraph: {
    title: 'About | Jess Ferraro - Data Analyst',
    description: 'From Apple retail to data analytics - bringing customer focus and unique analytical perspective to Australian employment data.',
    type: 'website'
  }
}