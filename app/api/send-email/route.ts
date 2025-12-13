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
      to: ['rmdldeleon@gmail.com'],
      subject: `Ptf Email from ${name}`,
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

// import { NextRequest, NextResponse } from "next/server";
// import EmailTemplate from "@/components/templates/EmailTemplate";

// // IMPORTANT: Install @react-email/render if you use the 'html:' property
// import { render } from '@react-email/render';

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: NextRequest) {
//   try {
//     // ➡️ Extract all four fields from the request body
//     const body = await request.json();
//     const { email, name, subject, message } = body;

//     // ➡️ Updated validation
//     if (!email || !name || !subject || !message) {
//       return NextResponse.json(
//         { message: "Missing one or more required fields (email, name, subject, message)" },
//         { status: 400 }
//       );
//     }

//     // Option A: Use the 'react:' property (Preferred if your setup allows it)
//     const emailData = {
//         react: EmailTemplate({ email, name, subject, message }),
//     };

//     // Option B: Fallback to 'html:' if 'react:' fails
//     // const emailHtml = render(EmailTemplate({ email, name, subject, message }));
//     // const emailData = { html: emailHtml };

//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["your-target-email@example.com"], // ⬅️ CHANGE THIS to your receiving email address
//       subject: `[Ptf Contact] ${subject} from ${name}`,
//       ...emailData, // Use either 'react' or 'html' from above
//     });

//     return NextResponse.json({ message: "Email sent successfully", id: data.data?.id });
//   } catch (err) {
//     console.error("Resend API Error:", err);
//     return NextResponse.json(
//       { message: "Email failed to send due to a server error.", error: (err as Error).message },
//       { status: 500 }
//     );
//   }
// }
