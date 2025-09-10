import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.jessferraro.com'),
  title: 'Jess Ferraro - Data Analyst Portfolio',
  description: 'Data Analyst specialising in workforce analytics and economic impact analysis. Currently Data Analyst Intern at EY. Central Coast, NSW.',
  keywords: 'Jess Ferraro, data analyst, workforce analytics, EY intern, Central Coast NSW, employment data, data visualisation',
  authors: [{ name: 'Jess Ferraro' }],
  creator: 'Jess Ferraro',
  openGraph: {
    title: 'Jess Ferraro - Data Analyst Portfolio',
    description: 'Data Analyst specialising in workforce analytics and economic impact analysis. View my COVID-19 employment recovery analysis and other projects.',
    url: 'https://www.jessferraro.com',
    siteName: 'Jess Ferraro Data Portfolio',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jess Ferraro - Data Analyst Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jess Ferraro - Data Analyst Portfolio',
    description: 'Data Analyst specialising in workforce analytics and economic impact analysis.',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'hz0bkbbbsOvg00_sgcBWJBbiNnT7VzotgFRNiOzfk40'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8X1F4FM1HW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8X1F4FM1HW', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        
        {/* Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jess Ferraro",
              "jobTitle": "Data Analyst",
              "worksFor": {
                "@type": "Organization",
                "name": "EY"
              },
              "url": "https://www.jessferraro.com",
              "sameAs": [
                "https://linkedin.com/in/jessferraro",
                "https://github.com/jess-ferraro-data"
              ],
              "knowsAbout": [
                "Data Analysis",
                "Workforce Analytics", 
                "Python",
                "Data Visualisation",
                "Employment Statistics"
              ],
              "alumniOf": "University of New South Wales",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NSW",
                "addressCountry": "AU"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        
        {/* Event tracking script */}
        <Script id="custom-analytics" strategy="afterInteractive">
          {`
            // Custom event tracking
            function trackEvent(eventName, parameters = {}) {
              gtag(&apos;event&apos;, eventName, {
                custom_parameter: parameters,
                page_title: document.title,
                page_location: window.location.href
              });
            }
            
            // Track project views
            function trackProjectView(projectName) {
              gtag(&apos;event&apos;, &apos;project_view&apos;, {
                project_name: projectName,
                engagement_time_msec: Date.now()
              });
            }
            
            // Track downloads
            function trackDownload(fileName, fileType) {
              gtag(&apos;event&apos;, &apos;file_download&apos;, {
                file_name: fileName,
                file_type: fileType
              });
            }
            
            // Track external links
            document.addEventListener(&apos;click&apos;, function(e) {
              if (e.target.tagName === &apos;A&apos; && e.target.href) {
                const url = new URL(e.target.href);
                if (url.hostname !== window.location.hostname) {
                  gtag(&apos;event&apos;, &apos;click&apos;, {
                    event_category: &apos;external_link&apos;,
                    event_label: url.hostname,
                    transport_type: &apos;beacon&apos;
                  });
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}