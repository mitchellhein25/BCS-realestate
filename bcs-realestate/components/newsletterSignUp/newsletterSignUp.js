import { useState } from 'react'
import newsletterSignUpStyles from './newsletterSignUp.module.css'
import axios from 'axios';

export default function NewsletterSignup() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        submitted: false,
        error: false,
        emailError: false,
        firstNameError: false,
        lastNameError: false
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        e.preventDefault();

        // Validate Email address
        const regex = new RegExp(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/i);
        var emailError = false;
        var firstNameError = false;
        var lastNameError = false;
        if (!regex.test(state.email)) {
            emailError = true;
        }
        if (state.firstName == '' || state.firstName == null) {
            firstNameError = true;
        }
        if (state.lastName == '' || state.lastName == null) {
            lastNameError = true;
        }

        setState({
            ...state,
            emailError: emailError,
            firstNameError: firstNameError,
            lastNameError: lastNameError,
        })

        if (emailError || firstNameError || lastNameError) {
            return;
        }

        //let csvJson = [{
        //    'First Name': state.firstName,
        //    'Last Name': state.lastName,
        //    'Primary personal email': state.email,
        //}]
        ////const csv = parse(csvJson);
        try {
            //let res = await axios.post('/api/mail', { 'csvJson': csvJson });
            let object = {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
            }

            let res = await axios.post('/api/appendGoogleSheet', state);
            setState({
                ...state,
                submitted: true
            })
        } catch (error) {
            setState({
                ...state,
                error: true
            })
        }
    }

    return (
        <div className={newsletterSignUpStyles.container}>
            <h2 className={newsletterSignUpStyles.header}>Sign up for our multifamily investing newsletter:</h2>
            {state.submitted ? 
                <p>Thank you for signing up for our newsletter!</p>
                    :
                <>
                    <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.topRow}>
                        <div className={newsletterSignUpStyles.inputLabel}>
                            <label className={newsletterSignUpStyles.label} htmlFor='firstName'>First Name</label>
                            <input className={newsletterSignUpStyles.input} type='text' name='firstName' placeholder='Enter Text'
                                onChange={handleChange} />
                            {state.firstNameError ? <p style={{ color: 'red' }}>Please enter a First Name.</p> : null}
                        </div>
                        <div className={newsletterSignUpStyles.inputLabel}>
                            <label className={newsletterSignUpStyles.label} htmlFor='lastName'>Last Name</label>
                            <input className={newsletterSignUpStyles.input} type='text' name='lastName' placeholder='Enter Text'
                                onChange={handleChange} />
                            {state.lastNameError ? <p style={{ color: 'red' }}>Please enter a Last Name.</p> : null}
                        </div>
                    </div>
                    <div className={newsletterSignUpStyles.row}>
                        <div className={newsletterSignUpStyles.inputLabel + ' ' + newsletterSignUpStyles.emailInputLabel}>
                            <label className={newsletterSignUpStyles.label} htmlFor='email'>Email</label>
                            <input className={newsletterSignUpStyles.input} type='email' name='email' placeholder='Enter Text'
                                onChange={handleChange} />
                            {state.emailError ? <p style={{ color: 'red' }}>Please enter a valid email address.</p> : null}
                        </div>
                    </div>
                    <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.marginTop}>
                        <button className={newsletterSignUpStyles.button} onClick={onSubmit}>Submit</button>
                    </div>
                    {state.error ?
                        <p>An error occurred. Please try again.</p>
                        : null
                    }
                </>
            }
        </div>
        )
}
