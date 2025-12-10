// a3-staff-website/api/send-request.js

import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    // POST 말고 다른 메서드는 막기
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 환경변수에 저장해 둔 SendGrid API 키 세팅
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // 프론트에서 보내는 값들
    const {
        name = '',
        email = '',
        phone = '',
        location = '',
        subject = '',
        message = '',
    } = req.body || {};

    const content = {
        to: process.env.SENDGRID_TO,
        from: process.env.SENDGRID_FROM,
        replyTo: email || process.env.SENDGRID_FROM,
        subject: `[A3 Website Inquiry] ${subject || 'New Contact Request'}`,
        html: `
      <h1>새로운 문의가 도착했습니다.</h1>
      <p><strong>이름:</strong> ${name || 'N/A'}</p>
      <p><strong>이메일:</strong> ${email || 'N/A'}</p>
      <p><strong>전화번호:</strong> ${phone || 'N/A'}</p>
      <p><strong>위치:</strong> ${location || 'N/A'}</p>
      <p><strong>제목:</strong> ${subject || 'N/A'}</p>
      <p><strong>메시지:</strong></p>
      <pre style="white-space:pre-wrap;">${message}</pre>
    `,
    };

    try {
        await sgMail.send(content);
        return res
            .status(200)
            .json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
        console.error(
            'SENDGRID ERROR:',
            error.response ? error.response.body : error.message
        );
        return res
            .status(500)
            .json({ success: false, message: 'Failed to send message.' });
    }
}
