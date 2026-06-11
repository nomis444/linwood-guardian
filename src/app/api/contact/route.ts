import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, coverage, business, message } = body;

    if (!name || !email || !phone || !coverage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Wire to Make.com webhook or Resend for email delivery
    // For now, log and return success so the form works during development
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      coverage,
      business: business || "Not provided",
      message: message || "No message",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
