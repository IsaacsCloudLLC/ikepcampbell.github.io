import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const socialShareImageUrl = new URL("/logo.jpg", "https://isaacs.cloud").toString()

export const metadata: Metadata = {
  metadataBase: new URL("https://isaacs.cloud"),
  icons: {
    icon: "/logo.jpg"

  },
  title: {
    default: 'Isaacs Cloud | Website Solutions for Quad Cities Businesses',
    template: '%s | Isaacs Cloud',
  },
  description: 'Isaacs Cloud | Proven Website Design and Cloud Solutions to automate, streamline, and secure your IT infrastructure. Located in the Quad Cities, Iowa.', // Include targeted keywords and location
  openGraph: {
    title: 'Isaacs Cloud | DevOps in the Quad Cities',
    description: 'Isaacs Cloud | Proven Website Design and Cloud Solutions to automate, streamline, and secure your IT infrastructure. Located in the Quad Cities, Iowa.', // Include targeted keywords and location
    url: "https://isaacs.cloud",
    siteName: 'Isaacs Cloud',
    locale: 'en_US',
    type: "website",
    images: {
      url: socialShareImageUrl,
      width: 1200,
      height: 630,
    },
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black ',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <title>Isaacs Cloud | Website Design For the Quad Cities</title>
        <link rel="icon" type="image/x-icon" href="/logo.jpg" />
        <meta property="og:image" content="/logo.jpg" />

      </head>
      <body className=" lg:mx-auto z-10">
        <div className="relative z-10">
          <section className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 bg-scroll bg-[url('/bg.jpg')]">
          </section>
          <div className="fixed w-full top-0 z-50">
            <Navbar />
          </div>
          <main className="flex-auto min-h-screen min-w-0 flex flex-col px-2 md:px-0 z-10 absolute top-0 w-full">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
      <GoogleAnalytics gaId="G-21M7CHET8L" />
    </html >
  )
}
