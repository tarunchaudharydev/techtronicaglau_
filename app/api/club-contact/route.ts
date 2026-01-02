import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, topic, message, clubName } = await req.json();

    // Validation
    if (!name || !email || !message || !clubName) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to OVERALL mail id
    await transporter.sendMail({
      from: `"Techtronica Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER, //  central email
      replyTo: email, // so admin can reply directly to user
      subject: `New message from ${clubName}${topic ? ` — ${topic}` : ""}`,
      html: `
  <div style="
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    background-color: #f8fafc;
    padding: 24px;
    color: #0f172a;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      padding: 24px 28px;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    ">
      <h2 style="
        margin: 0 0 12px;
        color: #4f46e5;
        font-size: 20px;
        font-weight: 600;
      ">
        New Contact Message
      </h2>

      <p style="margin: 0 0 20px; font-size: 14px; color: #475569;">
        You’ve received a new message from the <strong>${clubName}</strong> contact form.
      </p>

      <div style="
        background-color: #f1f5f9;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 20px;
        font-size: 14px;
      ">
        <p style="margin: 0 0 6px;"><strong>Club:</strong> ${clubName}</p>
        <p style="margin: 0 0 6px;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 6px;"><strong>Email:</strong> ${email}</p>
        ${topic ? `<p style="margin: 0;"><strong>Topic:</strong> ${topic}</p>` : ""}
      </div>

      <div style="
        border-left: 4px solid #6366f1;
        background-color: #f8fafc;
        padding: 16px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.7;
      ">
        ${message.replace(/\n/g, "<br />")}
      </div>

      <hr style="
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 24px 0;
      " />

      <p style="
        font-size: 12px;
        color: #64748b;
        text-align: center;
        margin: 0;
      ">
        Sent via Techtronica website contact form
      </p>
    </div>
  </div>
`,

    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
