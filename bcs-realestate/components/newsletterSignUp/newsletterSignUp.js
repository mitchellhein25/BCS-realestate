////import * as XLSX from 'xlsx';
////import { parse } from 'json2csv'
//import { writeFileSync } from "fs";
//import { createTransport } from 'nodemailer';
//import { write } from "xlsx/xlsx.mjs";
import { useState } from 'react'
import newsletterSignUpStyles from './newsletterSignUp.module.css'
//import { send } from 'emailjs-com';

export default function NewsletterSignup() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        //var serviceId = 'service_hln4q9v';
        //var templateId = 'template_acno9bv'
        var filename = "contact.xlsx";
        //let workSheet = XLSX.utils.json_to_sheet([state]);
        //var workBook = XLSX.utils.book_new();
        //XLSX.utils.book_append_sheet(workBook, workSheet, "Contact");
        //XLSX.writeFile(workBook, state.propertyInfo.address + '_Results.xlsx');
        //const buf = write(workbook, { type: "buffer", bookType: "xlsx" });
        //const workbook = writeFileSync(filename, buf);

        //const csv = parse([state], ['firstName', 'lastName', 'email']);

        //const transporter = createTransport({
        //    host: 'smtp.gmail.com',
        //    port: '465',
        //    secure: true,
        //    auth: {
        //        user: 'heindevelopment@gmail.com',
        //        pass: 'aXH43!2dpH4L0',
        //    },
        //});
        //const mailOptions = {
        //    from: 'heindevelopment@gmail.com',
        //    to: ['mitchelldalehein25@gmail.com'],
        //    subject: 'Test',
        //    text: 'Test body',
        //    attachments: [
        //        {
        //            filename,
        //            content: csv,
        //        },
        //    ],
        //};
        //await transporter.sendMail(mailOptions);
    }

    return (
        <div className={newsletterSignUpStyles.container}>
            <h2 className={newsletterSignUpStyles.header}>Sign up for our multifamily investing newsletter!</h2>
            <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.topRow}>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='firstName'>First Name</label>
                    <input className={newsletterSignUpStyles.input} type='text' name='firstName' placeholder='Enter Text'
                        onChange={handleChange} />
                </div>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='lastName'>Last Name</label>
                    <input className={newsletterSignUpStyles.input} type='text' name='lastName' placeholder='Enter Text'
                        onChange={handleChange} />
                </div>
            </div>
            <div className={newsletterSignUpStyles.row}>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='email'>Email</label>
                    <input className={newsletterSignUpStyles.input} type='email' name='email' placeholder='Enter Text'
                        onChange={handleChange} />
                </div>
            </div>
            <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.marginTop}>
                <button className={newsletterSignUpStyles.button} onClick={onSubmit}>Submit</button>
            </div>
        </div>
        )
}
