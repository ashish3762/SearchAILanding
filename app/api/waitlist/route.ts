import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Forward to Google Apps Script
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycby5ufxvHb1-j68M5hGfeZbYRRIT3yGSpznbJGKq9os5zzH7GgNEK_6Uhjd21vYrJ_j_2g/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    )

    if (!response.ok) {
      console.error('Google Apps Script error:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to submit to waitlist' },
        { status: 500 }
      )
    }

    const result = await response.text()
    console.log('Waitlist submission result:', result)

    return NextResponse.json(
      { message: 'Successfully added to waitlist' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}