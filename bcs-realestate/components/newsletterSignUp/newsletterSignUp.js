import { useState } from 'react'
import newsletterSignUpStyles from './newsletterSignUp.module.css'

export default function NewsletterSignup() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    return (
        <div>
            <div className={newsletterSignUpStyles.row}>
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
            <div className={newsletterSignUpStyles.inputLabel}>
                <label className={newsletterSignUpStyles.label} htmlFor='email'>Email</label>
                <input className={newsletterSignUpStyles.input} type='email' name='email' placeholder='Enter Text'
                    />
            </div>
        </div>
        )
}
