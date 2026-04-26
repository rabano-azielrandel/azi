import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/templates/EmailTemplate";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email, name, subject, message } = body;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ['rabano.azielrandel@gmail.com'],
      subject: `Portfolio Email from ${name}`,
      react: EmailTemplate({ email, name, subject, message}),
      
    });

    return NextResponse.json({ message: "Email sent", id: data.data?.id });
  } catch (err) {
    return NextResponse.json(
      { message: "Email not sent", error: err },
      { status: 500 }
    );
  }
}

