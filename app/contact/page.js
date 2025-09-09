'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with your actual form handling
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', company: '', message: '', projectType: '' })
    }, 1000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            Let's Start a Conversation
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.9, 
            lineHeight: 1.6 
          }}>
            Whether you need data insights, workforce analytics, or want to discuss a potential collaboration, 
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ padding: '4rem 0', background: '#0f766e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            
            {/* Quick Connect */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              color: '#1f2937',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem', 
                color: '#0f766e' 
              }}>
                Professional Network
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Connect with me on LinkedIn for professional networking and to see my latest projects.
              </p>
              <a 
                href="https://linkedin.com/in/jessferraro" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#0077b5',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'all 0.2s ease'
                }}
              >
                View LinkedIn Profile
              </a>
            </div>

            {/* Email Contact */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              color: '#1f2937',
              textAlign: 'center'
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
                Code Repository
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Explore my code, methodologies, and technical implementations on GitHub.
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

          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            padding: '3rem',
            color: '#1f2937',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#0f766e',
              textAlign: 'center' 
            }}>
              Project Enquiry Form
            </h2>
            <p style={{ 
              textAlign: 'center', 
              color: '#6b7280', 
              marginBottom: '2rem' 
            }}>
              Tell me about your data challenge and I'll get back to you as soon as possible.
            </p>

            {showSuccess ? (
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #22c55e',
                borderRadius: '0.5rem',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#16a34a', marginBottom: '1rem' }}>Message Sent Successfully!</h3>
                <p style={{ color: '#15803d' }}>
                  Thanks for reaching out. I'll review your enquiry and get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  style={{
                    background: '#22c55e',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    marginTop: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '1rem', 
                  marginBottom: '1rem' 
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '1rem', 
                  marginBottom: '1rem' 
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      placeholder="Your company or organisation"
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    >
                      <option value="">Select project type</option>
                      <option value="workforce-analytics">Workforce Analytics</option>
                      <option value="industry-analysis">Industry Analysis</option>
                      <option value="data-visualisation">Data Visualisation</option>
                      <option value="api-integration">API Integration</option>
                      <option value="consulting">Data Consulting</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    placeholder="Tell me about your project, data challenge, or how I can help..."
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? '#9ca3af' : '#0f766e',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section style={{ padding: '4rem 0', background: '#134e4a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem', 
              color: 'white' 
            }}>
              Availability & Location
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌊</div>
                <h3 style={{ color: '#a7f3d0', marginBottom: '0.5rem' }}>Based in</h3>
                <p style={{ color: '#ccfbf1' }}>Central Coast, NSW</p>
              </div>
              
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💼</div>
                <h3 style={{ color: '#a7f3d0', marginBottom: '0.5rem' }}>Current Role</h3>
                <p style={{ color: '#ccfbf1' }}>Data Analyst Intern at EY</p>
              </div>
              
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📅</div>
                <h3 style={{ color: '#a7f3d0', marginBottom: '0.5rem' }}>Availability</h3>
                <p style={{ color: '#ccfbf1' }}>Open to freelance projects</p>
              </div>
            </div>
            
            <p style={{ 
              color: '#a7f3d0', 
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}>
              I typically respond to enquiries within 24 hours. For urgent projects or 
              time-sensitive data analysis needs, please mention this in your message.
            </p>
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
  title: 'Contact | Jess Ferraro - Data Analyst',
  description: 'Get in touch for data analytics projects, workforce insights, or collaboration opportunities. Based on Central Coast NSW, available for freelance projects.',
  keywords: 'contact data analyst, hire data analyst Central Coast, workforce analytics freelance, data consulting NSW',
  openGraph: {
    title: 'Contact | Jess Ferraro - Data Analyst',
    description: 'Get in touch for data analytics projects and workforce insights.',
    type: 'website'
  }
}