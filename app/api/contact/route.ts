import { NextResponse } from "next/server";

// Google Apps Script endpoint for Contact Us submissions
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvSmJoPB5eSj8INtSTs7W4G5pZH9yrmxu3f1EAPBz_tbx5-KQAEUKAPOt1Q9crNmnsmw/exec";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    // Forward the form data to the Google Apps Script endpoint
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return NextResponse.json({ success: false, error: "Failed to submit contact form." }, { status: 500 });
    }

    const result = await response.json().catch(() => ({}));
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() || "Unknown error" }, { status: 500 });
  }
}
