import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function LoanDetailsSection({ state, setState }) {

    function handleChange(e) {
        setState(prevState => ({
            ...prevState,
            loanDetails: {
                ...prevState.propertyInfo,
                [e.target.name]: [e.target.value]
            }
        }))
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Loan Details</h2>
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="number" name="downPayment"
                    placeholder="Down Payment" onChange={handleChange} />
                <input className={rentalCalculatorStyles.input} type="number" name="interestRate"
                    placeholder="Interest Rate" onChange={handleChange} />
                <input className={rentalCalculatorStyles.input} type="number" name="loanLength"
                    placeholder="Loan Length" onChange={handleChange} />
            </div>
        </div>
    )
}