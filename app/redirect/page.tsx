'use client'

import { useEffect } from 'react'

export default function RedirectPage() {
  useEffect(() => {
    window.location.href = 'https://petbidthai.com'
  }, [])

  return <p>กำลังพาไปยังเว็บไซต์หลัก...</p>
}
