export const runtime = "nodejs";

import nodemailer from "nodemailer";

/* -------------------- IP → LOCATION -------------------- */
async function getLocationFromIP(ip: string) {
  if (!ip || ip === "Unknown" || ip === "127.0.0.1") return null;

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        "User-Agent": "Techtronica-Contact-API",
      },
    });

    if (!res.ok) return null;

    const data = await res.json();

    return {
      city: data.city,
      region: data.region,
      country: data.country_name,
      network: data.org,
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    /* -------------------- BODY -------------------- */
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* -------------------- HEADERS / META -------------------- */
    const headers = req.headers;

    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      "Unknown";

    const userAgent = headers.get("user-agent") || "Unknown";
    const language = headers.get("accept-language") || "Unknown";
    const referer = headers.get("referer") || "Direct";

    const device = /mobile/i.test(userAgent) ? "Mobile" : "Desktop";

    let browser = "Unknown";
    if (/edg/i.test(userAgent)) browser = "Edge";
    else if (/chrome/i.test(userAgent)) browser = "Chrome";
    else if (/firefox/i.test(userAgent)) browser = "Firefox";
    else if (/safari/i.test(userAgent)) browser = "Safari";

    const timeIST = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    /* -------------------- LOCATION -------------------- */
    const location = await getLocationFromIP(ip);

    /* -------------------- MAIL SETUP -------------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* -------------------- SEND MAIL -------------------- */
    await transporter.sendMail({
      from: `"Techtronica Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact Message from ${name}`,
      html: `
<div style="background:#f4f6f8;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<table width="600" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

<tr>
<td style="background:#0284c7;padding:20px 30px;">
<h2 style="margin:0;color:#ffffff;">New Contact Form Submission</h2>
<p style="margin:4px 0 0;color:#e0f2fe;font-size:13px;">
Techtronica Website
</p>
</td>
</tr>

<tr>
<td style="padding:30px;color:#334155;">
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>

<p><strong>Message:</strong></p>
<div style="margin-top:8px;padding:14px;background:#f8fafc;border-left:4px solid #0284c7;border-radius:6px;line-height:1.6;">
${message}
</div>

<hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;" />

<h3 style="margin-bottom:10px;color:#0f172a;">Sender Information</h3>

<table width="100%" style="font-size:13px;color:#475569;">
<tr><td><strong>IP Address:</strong></td><td>${ip}</td></tr>
<tr><td><strong>Device:</strong></td><td>${device}</td></tr>
<tr><td><strong>Browser:</strong></td><td>${browser}</td></tr>
<tr><td><strong>Language:</strong></td><td>${language}</td></tr>
<tr><td><strong>Referrer:</strong></td><td>${referer}</td></tr>
<tr><td><strong>Time (IST):</strong></td><td>${timeIST}</td></tr>
<tr><td><strong>User Agent:</strong></td><td style="word-break:break-all;">${userAgent}</td></tr>

${
  location
    ? `
<tr><td><strong>City:</strong></td><td>${location.city}</td></tr>
<tr><td><strong>Region:</strong></td><td>${location.region}</td></tr>
<tr><td><strong>Country:</strong></td><td>${location.country}</td></tr>
<tr><td><strong>Network:</strong></td><td>${location.network}</td></tr>
`
    : `
<tr><td colspan="2">Location unavailable</td></tr>
`
}
</table>
</td>
</tr>

<tr>
<td style="background:#f1f5f9;padding:16px;text-align:center;font-size:12px;color:#64748b;">
This is an automated message. Please do not reply.
</td>
</tr>

</table>
</td>
</tr>
</table>
</div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
