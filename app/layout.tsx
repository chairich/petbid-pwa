// app/layout.tsx
import './globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'PetBid Thai',
  description: 'ระบบประมูลสัตว์เลี้ยงแบบเรียลไทม์',
  themeColor: '#003399',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
  appleWebApp: {
    capable: true,
    title: 'PetBid Thai',
    statusBarStyle: 'black-translucent',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <head />
      <body>{children}</body>
    </html>
  )
}
