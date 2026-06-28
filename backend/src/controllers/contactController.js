const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, company, msg } = req.body;

    if (!name || !email || !phone || !msg) {
      return res.status(400).json({ success: false, message: "Required fields are missing." });
    }

    // SMTP Transporter configuration (.env से क्रेडेंशियल्स लेगा)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Layout Matrix
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@alugridx.com", 
      subject: `New Technical Submittal RFQ from ${company || name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #124170; max-width: 600px; border: 1px solid #e2e8f0; rounded: 12px;">
          <h2 style="color: #124170; border-bottom: 2px solid #3B82F6; padding-bottom: 8px;">Technical Submittal Request</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Company:</strong> ${company || "Not Provided"}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Project Scope / RFQ Requirements:</strong></p>
          <p style="white-space: pre-line; background: #f8fafc; padding: 15px; border-radius: 8px; color: #334155;">${msg}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Internal server error. Failed to send email." });
  }
};