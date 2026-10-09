import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        { status: 400 },
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    // Limit input sizes
    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 },
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">
            New Contact Form Message
          </h2>

          <div style="margin-top: 20px;">
            <strong>Name:</strong>
            <p>${safeName}</p>
          </div>

          <div style="margin-top: 20px;">
            <strong>Email:</strong>
            <p>
              <a href="mailto:${safeEmail}">
                ${safeEmail}
              </a>
            </p>
          </div>

          <div style="margin-top: 20px;">
            <strong>Message:</strong>

            <p style="
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              line-height: 1.6;
            ">
              ${safeMessage}
            </p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />

          <p style="color: #666; font-size: 13px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send the message. Please try again later.",
        },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
