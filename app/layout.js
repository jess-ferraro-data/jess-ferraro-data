import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jess Ferraro - Data Portfolio',
  description: 'Data Analyst & Scientist showcasing advanced analytics and visualisation projects',
  keywords: 'data analyst, data scientist, portfolio, python, data visualisation, statistics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        
        <main role="main">
          {children}
        </main>

        <footer style={{
          background: 'var(--grey-900)',
          color: 'var(--grey-400)',
          padding: 'var(--space-2xl) 0',
          marginTop: 'var(--space-3xl)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-xl)'
            }}>
              <div>
                <h3 style={{ 
                  color: 'var(--primary-400)', 
                  marginBottom: 'var(--space-md)',
                  fontSize: '1.125rem'
                }}>
                  Data Portfolio
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Showcasing advanced analytics, statistical modelling, and data visualisation 
                  projects for the Australian data science community.
                </p>
              </div>
              
              <div>
                <h4 style={{ 
                  color: 'white', 
                  marginBottom: 'var(--space-md)',
                  fontSize: '1rem'
                }}>
                  Featured Projects
                </h4>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: 'var(--space-xs)' }}>
                    <a href="/projects/arts-employment" style={{ 
                      color: 'var(--grey-400)', 
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    className="footer-link"
                    >
                      🎭 Arts Employment Recovery Analysis
                    </a>
                  </li>
                  <li style={{ marginBottom: 'var(--space-xs)' }}>
                    <span style={{ color: 'var(--grey-500)' }}>
                      📊 More projects coming soon
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ 
                  color: 'white', 
                  marginBottom: 'var(--space-md)',
                  fontSize: '1rem'
                }}>
                  Connect
                </h4>
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--space-md)',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="https://linkedin.com/in/jessferraro" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--grey-400)', 
                      textDecoration: 'none',
                      padding: 'var(--space-xs)',
                      borderRadius: 'var(--border-radius)',
                      transition: 'all 0.2s ease'
                    }}
                    className="footer-link"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/jess-ferraro-data" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--grey-400)', 
                      textDecoration: 'none',
                      padding: 'var(--space-xs)',
                      borderRadius: 'var(--border-radius)',
                      transition: 'all 0.2s ease'
                    }}
                    className="footer-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div style={{
              paddingTop: 'var(--space-lg)',
              borderTop: '1px solid var(--grey-800)',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: 'var(--grey-500)'
            }}>
              <p>
                © {new Date().getFullYear()} Jess Ferraro. Built with Next.js for the Australian data community.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}