import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 6; // adjust as needed
const ipTimestamps = new Map(); // in-memory rate limiter (resets on server restart)

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = ipTimestamps.get(ip) || [];
  // drop old timestamps
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipTimestamps.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function sanitize(text = "") {
  return String(text).replace(/[\r\n<>]/g, "").trim();
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const subject = sanitize(body.subject);
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Nodemailer transporter using Gmail SMTP and app password
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // To trigger TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email to YOU (recipient)
    const mailToYou = {
      from: `"${process.env.SITE_NAME || "Portfolio Contact"}" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `[Portfolio] ${subject || "New contact request"}`,
      text: `You received a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<p>You received a new message from your portfolio.</p>
             <p><strong>Name:</strong> ${name}<br/>
             <strong>Email:</strong> <a href="mailto:${email}">${email}</a><br/>
             <strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
      replyTo: email, // so you can click reply in your inbox and respond to sender
    };

    await transporter.sendMail(mailToYou);

    // Optional: Send auto-reply to visitor (formal, from your GMAIL_USER)
    if (String(process.env.ALLOW_AUTO_REPLY).toLowerCase() === "true") {
      const autoReply = {
        from: `"${process.env.SITE_NAME} (Auto Reply)" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thanks for contacting ${process.env.SITE_NAME || "me"}`,
        text: `Hi ${name},\n\nThanks for reaching out — I received your message and will get back to you as soon as possible.\n\n— ${process.env.SITE_NAME || "Azi"}`,
        html: `<p>Hi ${name},</p>
               <p>Thanks for reaching out — I have received your message and will get back to you as soon as possible.</p>
               <p>— ${process.env.SITE_NAME || "Azi"}</p>`,
        // Use replyTo to discourage direct replies to the no-reply address (optional)
        replyTo: process.env.RECIPIENT_EMAIL,
      };

      await transporter.sendMail(autoReply);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("contact error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
