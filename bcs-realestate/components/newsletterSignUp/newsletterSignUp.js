import { parse } from 'json2csv'
import { useState } from 'react'
import newsletterSignUpStyles from './newsletterSignUp.module.css'
import axios from 'axios';

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
        let csvJson = [{
            'First Name': state.firstName,
            'Last Name': state.lastName,
            'Primary personal email': state.email,
        }]
        const csv = parse(csvJson, ['', '', '']);
        console.log(csv);
        try {
            let res = await axios.post('/api/mail', { 'csv': csv });
            console.log(res);
            console.log('Success!');
        } catch (error) {
            console.log('An error occurred.Please try again.');
            console.log(error);
        }
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
