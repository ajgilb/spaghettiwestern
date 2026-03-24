import { NextResponse } from "next/server";

/**
 * POST /api/signup
 * Accepts { email, name, notes } and stores/forwards the sign-up data.
 *
 * In production you would forward this to a database, email service, or CRM.
 * For now it simply echoes back a success response so the UI works end-to-end.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, notes } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: persist to a database or forward to an email service.
    console.log("New sign-up:", { email, name, notes });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
