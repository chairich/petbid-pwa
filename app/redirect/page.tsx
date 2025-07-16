// app/redirect/page.tsx
'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    window.location.href = 'https://www.petbidthai.com';
  }, []);

  return <p>กำลังเปลี่ยนเส้นทางไปยังเว็บไซต์หลัก...</p>;
}
