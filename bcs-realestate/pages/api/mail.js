import { createTransport } from 'nodemailer';
require("dotenv").config();


export default async function sendMail(req, res) {
    try {
        var filename = "contact.csv";
        const transporter = createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOptions = {
            from: 'heindevelopment@gmail.com',
            to: 'mitchelldalehein25@gmail.com',
            subject: 'Test',
            text: 'Test body',
            attachments: [
                {
                    filename,
                    content: req.body.csv,
                },
            ],
        };
        let result = await transporter.sendMail(mailOptions);
        res.status(200).json({ result });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to send email.' });
        
    }
}