import React from 'react'
import './styles.css'
import Navbar from '@/components/Navbar/Navbar'

export const metadata = {
  description: 'this is anis portfolio',
  title: 'Anis Boulila',
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
      </body>
    </html>
  )
}
