import { NextResponse } from "next/server";
import { VEHICLE_USE_OPTIONS, isDeclinedVehicleUse } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, coverage, business, message, vehicleUse } = body;

    if (!name || !email || !phone || !coverage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Commercial Auto for a line Linwood does not place (for-hire passenger or
    // for-hire trucking). The form already showed the visitor the appetite
    // message instead of a submit button; this is the server-side backstop so a
    // hand-built POST cannot land one in Tamara's inbox either. Logged, counted
    // in GA4 by the form, never forwarded to Make.
    if (coverage === "Commercial Auto" && isDeclinedVehicleUse(vehicleUse)) {
      console.log("Contact form declined (out of appetite):", { coverage, vehicleUse });
      return NextResponse.json({ success: true, declined: true });
    }

    const vehicleUseLabel = VEHICLE_USE_OPTIONS.find((o) => o.value === vehicleUse)?.label;

    const submission = {
      name,
      email,
      phone,
      coverage,
      business: business || "Not provided",
      // The Make scenario maps `message` into the email, so the vehicle-use
      // answer rides inside it rather than needing a new mapping in Make.
      message: vehicleUseLabel
        ? `Vehicle use: ${vehicleUseLabel}\n\n${message || "No message"}`
        : message || "No message",
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
