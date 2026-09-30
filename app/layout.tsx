import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
})

const siteUrl = 'https://www.urhired.ie'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'URHired — AI interview coaching for your programme, at scale',
    template: '%s | URHired',
  },
  description:
    "Tessa is the AI interview coach that universities, colleges, employability programmes, charities and community organisations deploy to their own cohorts — real, repeatable interview practice for every person, without adding to your team's caseload. AI for good that helps unlock neurodivergent talent.",
  keywords: [
    'AI interview coach',
    'AI interview coaching',
    'AI for good',
    'interview practice',
    'mock interview practice',
    'interview preparation',
    'neurodivergent talent',
    'neurodiversity employment',
    'employability programmes',
    'job readiness',
    'workforce programmes',
    'careers and employability',
    'university careers service',
    'college interview practice',
    'charity employment support',
    'community employment programmes',
    'Tessa AI interview coach',
    'URHired',
    'ur hired',
    'inclusive hiring',
    'interview skills training',
  ],
  authors: [{ name: 'URHired', url: siteUrl }],
  creator: 'URHired',
  publisher: 'URHired',
  applicationName: 'URHired',
  category: 'education',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteUrl,
    siteName: 'URHired',
    title: 'URHired — AI interview coaching for your programme, at scale',
    description:
      'Deploy Tessa, our AI interview coach, into your programme and give every person real, repeatable interview practice. AI for good that helps organisations unlock neurodivergent talent.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'URHired — AI interview coaching that helps unlock neurodivergent talent, at scale.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URHired — AI interview coaching for your programme, at scale',
    description:
      'Deploy Tessa, our AI interview coach, into your programme and give every person real, repeatable interview practice. AI for good.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f766e',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'URHired',
      alternateName: 'ur hired',
      url: siteUrl,
      description:
        'AI interview coaching, deployed through the organisations already supporting your community. AI for good that helps unlock neurodivergent talent.',
      email: 'support@urhired.ie',
      telephone: '+353838046428',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6 Fern Road, Sandyford',
        addressLocality: 'Dublin',
        postalCode: 'D18 FP98',
        addressCountry: 'IE',
      },
      founder: {
        '@type': 'Person',
        name: 'Owen Murray',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'URHired',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-IE',
    },
    {
      '@type': 'Service',
      name: 'Tessa — AI interview coach',
      serviceType: 'AI interview coaching',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      description:
        'Tessa gives universities, colleges, employability programmes, charities and community organisations a way to put every person through real, repeatable interview practice — without adding to staff caseloads.',
      audience: {
        '@type': 'Audience',
        audienceType:
          'Universities, colleges, employability programmes, charities and community organisations',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
