import React from 'react'
import './styles.css'
import Navbar from '@/components/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anis Boulila | Portfolio',
  description:
    'Explore the personal portfolio of Anis Boulila, featuring creative web development projects, skills, and technical expertise.',
  keywords: [
    'Anis Boulila',
    'Web Developer',
    'Portfolio',
    'Full Stack Developer',
    'React',
    'Next.js',
    'payloadcms',
  ],
  authors: [{ name: 'Anis Boulila' }],
  creator: 'Anis Boulila',
  metadataBase: new URL('https://anis-boulila.vercel.app'),
  openGraph: {
    title: 'Anis Boulila | Portfolio',
    description: 'Explore the web development projects and technical expertise of Anis Boulila.',
    url: 'https://anis-boulila.vercel.app',
    siteName: 'Anis Boulila Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anis Boulila | Portfolio',
    description: 'Explore the web development projects and technical expertise of Anis Boulila.',
    creator: '@anisboulila2',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body className="lg:max-w-[70%] md:max-w-[75%] sm:max-w-[80%] max-w-[90%] mx-auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
