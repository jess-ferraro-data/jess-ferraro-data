export default function ContactPage() {
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
            Let&apos;s Connect
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.9, 
            lineHeight: 1.6 
          }}>
            Ready to discuss data analytics opportunities? I&apos;d love to hear about your project or explore potential collaborations.
          </p>
        </div>
      </section>

      {/* Main Contact Options */}
      <section style={{ padding: '4rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Primary Contact - LinkedIn */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '3rem',
            border: '3px solid #0077b5'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💼</div>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#0077b5' 
            }}>
              Professional Networking
            </h2>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '2rem', 
              fontSize: '1.125rem',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Connect with me on LinkedIn to discuss data analytics opportunities, view my professional background, 
              and see recommendations from colleagues and clients.
            </p>
            <a 
              href="https://linkedin.com/in/jessferraro" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#0077b5',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                display: 'inline-block',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
              }}
            >
              📱 Connect on LinkedIn
            </a>
          </div>

          {/* Secondary Contact Options */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>

            {/* GitHub */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              color: '#1f2937',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem', 
                color: '#0f766e' 
              }}>
                Technical Portfolio
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Review my code, methodologies, and technical implementations.
              </p>
              <a 
                href="https://github.com/jess-ferraro-data" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#24292e',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'all 0.2s ease'
                }}
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Connect Section */}
      <section style={{ padding: '4rem 0', background: '#134e4a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: 'white' 
          }}>
            What Can We Discuss?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ color: '#a7f3d0', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                Data Analytics Projects
              </h3>
              <p style={{ color: '#ccfbf1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Workforce analytics, industry analysis, economic impact assessment, and policy-relevant research.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ color: '#a7f3d0', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                Collaboration Opportunities
              </h3>
              <p style={{ color: '#ccfbf1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Freelance projects, consulting work, or full-time opportunities in data analytics and insights.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ color: '#a7f3d0', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                Knowledge Sharing
              </h3>
              <p style={{ color: '#ccfbf1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Methodology discussions, technical questions, or sharing insights about Australian employment data.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎭</div>
              <h3 style={{ color: '#a7f3d0', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                Arts & Culture Analytics
              </h3>
              <p style={{ color: '#ccfbf1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Creative industry analysis, cultural sector insights, and arts policy research projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Response Time */}
      <section style={{ padding: '4rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            color: '#1f2937'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem', 
              color: '#0f766e' 
            }}>
              Let&apos;s Start the Conversation
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌊</div>
                <h3 style={{ color: '#0f766e', marginBottom: '0.5rem', fontWeight: 'bold' }}>Location</h3>
                <p style={{ color: '#6b7280' }}>Central Coast, NSW</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                <h3 style={{ color: '#0f766e', marginBottom: '0.5rem', fontWeight: 'bold' }}>Current Role</h3>
                <p style={{ color: '#6b7280' }}>Data Analyst Intern at EY</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                <h3 style={{ color: '#0f766e', marginBottom: '0.5rem', fontWeight: 'bold' }}>Response Time</h3>
                <p style={{ color: '#6b7280' }}>Within 24-48 hours</p>
              </div>
            </div>
            
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.125rem',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              I&apos;m always interested in discussing data analytics opportunities and sharing insights about workforce trends. 
              Connect with me on LinkedIn for the fastest response!
            </p>

            <a 
              href="https://linkedin.com/in/jessferraro" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#0077b5',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                display: 'inline-block',
                transition: 'all 0.2s ease'
              }}
            >
              💼 Connect Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// =============================================================================
// METADATA FOR SEO
// =============================================================================
export const metadata = {
  title: 'Contact',
  description: 'Connect with Jess Ferraro for data analytics opportunities, workforce insights, and collaboration. Based on Central Coast NSW, specialising in Australian employment data.',
  keywords: 'contact data analyst, Jess Ferraro LinkedIn, data analytics Central Coast, workforce analytics specialist, Australian employment data expert',
  openGraph: {
    title: 'Contact | Jess Ferraro - Data Analyst',
    description: 'Connect for data analytics opportunities and workforce insights.',
    url: 'https://jessferraro.com/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Jess Ferraro - Data Analytics Services',
      },
    ],
  },
}