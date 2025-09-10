export const metadata = {
  metadataBase: new URL('https://www.jessferraro.com'),  
  title: 'The Arts Bounce Back | COVID Employment Analysis by Jess Ferraro',
  description: 'Comprehensive analysis of Australia\'s arts industry recovery from COVID-19. How the sector achieved 86% recovery using 440k+ ABS data points.',
  keywords: 'arts employment analysis, COVID recovery, Australian employment data, workforce analytics, Jess Ferraro',
  openGraph: {
    title: 'The Arts Bounce Back - Australian Employment Recovery Analysis',
    description: 'How Australia\'s arts sector bounced back from COVID-19: 86% recovery rate, #2 industry ranking, 440k+ data points analysed.',
    url: 'https://www.jessferraro.com/projects/arts-employment',
    images: [
      {
        url: '/images/og-arts-project.jpg',
        width: 1200,
        height: 630,
        alt: 'The Arts Bounce Back COVID Employment Analysis by Jess Ferraro'
      }
    ],
    type: 'article',
    authors: ['Jess Ferraro'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Arts Bounce Back - COVID Employment Recovery Analysis',
    description: 'Australia\'s arts industry recovery analysis: 86% recovery achieved',
    images: ['/images/og-arts-project.jpg'],
  }
}

export default function ArtsProjectLayout({ children }) {
  return children
}