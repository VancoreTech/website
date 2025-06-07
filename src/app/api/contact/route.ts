import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, company, phone, message } = body

  console.log('📬 Contact form submission:', { name, email, company, phone, message })

  try {
   

    return NextResponse.json(
      { success: true, message: 'Thanks for reaching out!' },
      { status: 200 }
    )
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
