// api/send-request.js

const sgMail = require('@sendgrid/mail');

// 환경변수에 저장된 SendGrid API Key 설정
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 🔹 Vercel Node 서버리스 함수: module.exports 로 내보내기
module.exports = async (req, res) => {
    // POST 만 허용
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const {
            name,
            email,
            phone = '',
            location = '',
            subject = '',
            message = '',
        } = req.body || {};

        // 보내는 메일 내용 구성
        const mail = {
            to: process.env.SENDGRID_TO,          // 받는 사람(들)
            from: process.env.SENDGRID_FROM,      // SendGrid에서 인증된 발신자
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
        <pre style="white-space:pre-wrap;">${message || ''}</pre>
      `,
        };

        await sgMail.send(mail);

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully.',
        });
    } catch (error) {
        console.error(
            'SENDGRID ERROR:',
            error.response ? error.response.body : error.message
        );

        return res.status(500).json({
            success: false,
            message: 'Failed to send message.',
        });
    }
};
