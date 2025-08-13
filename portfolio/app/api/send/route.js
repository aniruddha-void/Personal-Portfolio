import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      return NextResponse.json({ error: "Server email config missing" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: ["anirudhabhandare4303@gmail.com", email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
