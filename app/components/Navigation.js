'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav style={{
      background: 'rgba(15, 118, 110, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Logo */}
        <Link 
          href="/" 
          onClick={closeMobileMenu}
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#ccfbf1',
            textDecoration: 'none',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#99f6e4'}
          onMouseOut={(e) => e.target.style.color = '#ccfbf1'}
        >
          Jess Ferraro
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#ccfbf1',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation Links */}
        <ul style={{
          display: isMobile ? 'none' : 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/projects/arts-employment" 
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              Featured Work
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              Contact
            </Link>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/jessferraro" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/jess-ferraro-data" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              style={{
                color: '#a7f3d0',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ccfbf1'}
              onMouseOut={(e) => e.target.style.color = '#a7f3d0'}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          background: '#115e59',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
          zIndex: 50,
          padding: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                style={{
                  color: '#ccfbf1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                onClick={closeMobileMenu}
                style={{
                  color: '#ccfbf1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/projects/arts-employment" 
                onClick={closeMobileMenu}
                style={{
                  color: '#ccfbf1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Featured Work
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                style={{
                  color: '#ccfbf1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                style={{
                  color: '#ccfbf1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Contact
              </Link>
            </li>
            <li style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
              paddingTop: '1rem', 
              marginTop: '1rem' 
            }}>
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                justifyContent: 'center' 
              }}>
                <a 
                  href="https://linkedin.com/in/jessferraro" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  style={{
                    color: '#99f6e4',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  💼 LinkedIn
                </a>
                <a 
                  href="https://github.com/jess-ferraro-data" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  style={{
                    color: '#99f6e4',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  💻 GitHub
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}