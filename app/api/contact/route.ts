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
<div style="background:#eef2f7;padding:40px 0;font-family:Inter,Segoe UI,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">

        <!-- MAIN CARD -->
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:16px;overflow:hidden;
          box-shadow:0 20px 40px rgba(0,0,0,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0284c7,#0369a1);
              padding:22px 26px;">
              <table width="100%">
                <tr>
                  <td width="70" valign="middle">
                    <img src="https://techtronicaglau.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
                      alt="Techtronica Logo"
                      style="height:48px;display:block;" />
                  </td>
                  <td valign="middle">
                    <h2 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">
                      New Contact Form Submission
                    </h2>
                    <p style="margin:4px 0 0;color:#bae6fd;font-size:13px;">
                      Techtronica Website
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:30px;color:#0f172a;">

              <!-- INFO GRID -->
              <table width="100%" style="margin-bottom:20px;font-size:14px;">
                <tr>
                  <td style="padding:10px 0;"><strong>Name</strong><br/>${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;"><strong>Email</strong><br/>
                    <a href="mailto:${email}" style="color:#0284c7;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE CARD -->
              <div style="
                background:#f8fafc;
                border-radius:12px;
                padding:18px;
                border-left:5px solid #0284c7;
                line-height:1.7;
                font-size:14px;
                box-shadow:inset 0 0 0 1px #e5e7eb;
              ">
                <strong style="display:block;margin-bottom:6px;">Message</strong>
                ${message}
              </div>

              <!-- META -->
              <div style="margin-top:26px;">
                <h3 style="margin:0 0 12px;font-size:15px;color:#020617;">
                  Sender Metadata
                </h3>

                <table width="100%" cellpadding="6" cellspacing="0"
                  style="font-size:12px;color:#475569;background:#f9fafb;border-radius:10px;">
                  <tr><td>IP</td><td>${ip}</td></tr>
                  <tr><td>Device</td><td>${device}</td></tr>
                  <tr><td>Browser</td><td>${browser}</td></tr>
                  <tr><td>Language</td><td>${language}</td></tr>
                  <tr><td>Referrer</td><td>${referer}</td></tr>
                  <tr><td>Time (IST)</td><td>${timeIST}</td></tr>
                  <tr>
                    <td>User Agent</td>
                    <td style="word-break:break-all;">${userAgent}</td>
                  </tr>

                  ${
                    location
                      ? `
                        <tr><td>City</td><td>${location.city}</td></tr>
                        <tr><td>Region</td><td>${location.region}</td></tr>
                        <tr><td>Country</td><td>${location.country}</td></tr>
                        <tr><td>Network</td><td>${location.network}</td></tr>
                      `
                      : `
                        <tr><td colspan="2">Location unavailable</td></tr>
                      `
                  }
                </table>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f1f5f9;padding:18px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#475569;">
                © 2026 <strong>Techtronica</strong> · GLA University
              </p>
              <p style="margin:4px 0 0;font-size:11px;color:#64748b;">
                Electronics & Communication Engineering Society
              </p>
              <p style="margin:6px 0 0;font-size:10px;color:#94a3b8;">
                Automated message · Do not reply
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
`

,
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
