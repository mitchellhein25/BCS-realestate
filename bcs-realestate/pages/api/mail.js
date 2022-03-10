import { createTransport } from 'nodemailer';
import { parse } from 'json2csv'
require("dotenv").config();


export default async function sendMail(req, res) {
    try {
        const csv = parse(req.body.csvJson);
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
            to: 'gregschwartz@kw.com',
            //to: 'mitchelldalehein25@gmail.com',
            subject: 'New Newsletter Subscriber from bcsrei.com: ' + req.body.csvJson[0]['First Name'] + ' ' + req.body.csvJson[0]['Last Name'],
            text: `Hello Greg,

You got a new subscriber for your multifamily newsletter from bcsrei.com.


Name: ` + req.body.csvJson[0]['First Name'] + ' ' + req.body.csvJson[0]['Last Name'] +
`

Email: ` + req.body.csvJson[0]['Primary personal email'] +
`


A CSV file is attached, prepared for import into KW Command.`,
            attachments: [
                {
                    filename,
                    content: csv,
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