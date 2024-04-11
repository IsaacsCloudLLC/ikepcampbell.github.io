import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'

export const metadata: Metadata = {
  metadataBase: new URL("https://isaacs.cloud"),
  title: {
    default: 'Isaacs Cloud | Providing DevOps Solutions since 2019',
    template: '%s | Isaacs Cloud',
  },
  description: 'Providing DevOps Solutions since 2019',
  openGraph: {
    title: 'Isaacs Cloud',
    description: 'Providing DevOps Solutions since 2019',
    url: "https://isaacs.cloud",
    siteName: 'Isaacs Cloud',
    locale: 'en_US',
    type: 'website',
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
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto">
        <div className="sticky top-0 z-50 mb-10 bg-black">
          <Navbar />
        </div>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
