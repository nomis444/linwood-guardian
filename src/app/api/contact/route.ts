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

    const submission = {
      name,
      email,
      phone,
      coverage,
      business: business || "Not provided",
      message: message || "No message",
      timestamp: new Date().toISOString(),
    };
    console.log("Contact form submission:", submission);

    // Make.com scenario 4850279 — emails the lead to Midpoint
    const webhookUrl =
      process.env.CONTACT_WEBHOOK_URL ||
      "https://hook.us1.make.com/6blmqz51j1hmg8b8mktn4yjif6mf77ny";
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) {
        console.error("Contact webhook failed:", res.status, await res.text());
      }
    } catch (err) {
      // Submission is still logged above; don't surface delivery issues to the visitor
      console.error("Contact webhook error:", err);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
