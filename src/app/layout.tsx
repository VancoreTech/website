import './globals.css'
import React from 'react'
import Navbar from '@/components/Navbar'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Vancore',
  description: 'Smart commerce for growing businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-background text-black font-sans">
        <Navbar />

        <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {children}
          <DownloadSection />
        </main>

        <Footer />

      </body>
    </html>
  )
}
