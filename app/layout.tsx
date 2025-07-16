// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'PetBid Thai',
  description: 'PWA for PetBidThai',
  themeColor: '#003399',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <head>
        {/* จำเป็นต้องใส่ด้วยตัวเอง */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#003399" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

