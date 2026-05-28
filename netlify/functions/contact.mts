import nodemailer from "nodemailer";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json() as Record<string, string>;
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, service, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { success: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "hello@octavesmartcare.co.uk",
      to: process.env.CONTACT_EMAIL || "hello@octavesmartcare.co.uk",
      subject: `Octave Smartcare — New Contact: ${service || "General Enquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Organisation:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ""}
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json(
      { success: false, error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
