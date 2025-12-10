// a3-staff-website/api/send-request.js

// Vercel Node 함수 (ESM)
export default async function handler(req, res) {
    // 1) POST 이외 메서드는 막기
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const API_KEY = process.env.SENDGRID_API_KEY;
    const FROM = process.env.SENDGRID_FROM;
    const TO = process.env.SENDGRID_TO;

    if (!API_KEY || !FROM || !TO) {
        console.error("SENDGRID ENV MISSING", { API_KEY: !!API_KEY, FROM, TO });
        return res
            .status(500)
            .json({ success: false, message: "Email config error on server." });
    }

    // 2) 프론트에서 보낸 데이터
    const {
        name = "",
        email = "",
        phone = "",
        location = "",
        subject = "",
        message = "",
    } = req.body || {};

    // 3) SendGrid용 payload 만들기
    const toList = TO.split(",")
        .map((e) => e.trim())
        .filter(Boolean)
        .map((emailAddr) => ({ email: emailAddr }));

    const html = `
    <h1>새로운 문의가 도착했습니다.</h1>
    <p><strong>이름:</strong> ${name || "N/A"}</p>
    <p><strong>이메일:</strong> ${email || "N/A"}</p>
    <p><strong>전화번호:</strong> ${phone || "N/A"}</p>
    <p><strong>위치:</strong> ${location || "N/A"}</p>
    <p><strong>제목:</strong> ${subject || "N/A"}</p>
    <p><strong>메시지:</strong></p>
    <pre style="white-space:pre-wrap;">${message}</pre>
  `;

    const payload = {
        personalizations: [
            {
                to: toList,
                subject: `[A3 Website Inquiry] ${subject || "New Contact Request"}`,
            },
        ],
        from: { email: FROM },
        reply_to: email ? { email } : undefined,
        content: [{ type: "text/html", value: html }],
    };

    try {
        // 4) SendGrid HTTP API 호출
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error("SENDGRID ERROR:", response.status, text);
            return res
                .status(500)
                .json({ success: false, message: "Failed to send message." });
        }

        return res
            .status(200)
            .json({ success: true, message: "Message sent successfully." });
    } catch (err) {
        console.error("SENDGRID EXCEPTION:", err);
        return res
            .status(500)
            .json({ success: false, message: "Failed to send message." });
    }
}
