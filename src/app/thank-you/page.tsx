import Link from 'next/link'
import React from 'react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-md text-center bg-white rounded-xl shadow p-10">
        <h1 className="text-3xl font-bold mb-4">Thanks for reaching out!</h1>
        <p className="text-gray-700 mb-6">
          We’ve received your message and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#0A6DEE] text-white rounded-md hover:bg-[#0856C1] transition"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
