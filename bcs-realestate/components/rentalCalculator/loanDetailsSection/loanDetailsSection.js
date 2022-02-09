import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function LoanDetailsSection() {

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Loan Details</h2>
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="number" name="downPayment" placeholder="Down Payment"/>
                <input className={rentalCalculatorStyles.input} type="number" name="interestRate" placeholder="Interest Rate"/>
                <input className={rentalCalculatorStyles.input} type="number" name="loanLength" placeholder="Loan Length"/>
            </div>
        </div>
    )
}