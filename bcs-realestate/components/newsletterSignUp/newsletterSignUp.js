import { useState } from 'react'
import PrimaryButton from '../primaryButton/primaryButton'
import newsletterSignUpStyles from './newsletterSignUp.module.css'
import primaryButtonStyles from '../primaryButton/primaryButton.module.css'

export default function NewsletterSignup() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    return (
        <div className={newsletterSignUpStyles.container}>
            <h2 className={newsletterSignUpStyles.header}>Sign up for our multifamily investing newsletter!</h2>
            <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.topRow}>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='firstName'>First Name</label>
                    <input className={newsletterSignUpStyles.input} type='text' name='firstName' placeholder='Enter Text'
                         />
                </div>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='lastName'>Last Name</label>
                    <input className={newsletterSignUpStyles.input} type='text' name='lastName' placeholder='Enter Text'
                        />
                </div>
            </div>
            <div className={newsletterSignUpStyles.row}>
                <div className={newsletterSignUpStyles.inputLabel}>
                    <label className={newsletterSignUpStyles.label} htmlFor='email'>Email</label>
                    <input className={newsletterSignUpStyles.input} type='email' name='email' placeholder='Enter Text'
                        />
                </div>
            </div>
            <div className={newsletterSignUpStyles.row + ' ' + newsletterSignUpStyles.marginTop}>
                <button className={newsletterSignUpStyles.button}>Submit</button>
            </div>
        </div>
        )
}
