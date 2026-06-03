import React from 'react'
import './styles.css'

export const metadata = {
  description: 'this is anis portfolio',
  title: 'Anis Boulila',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
