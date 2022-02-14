import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RentalIncomeSection({ state, setState }) {

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Rental Income</h2>
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="number" name="monthlyIncome" placeholder="Monthly Income" />
                <div>
                    <input type="checkbox" id="monthIncomeNAPSF" name="monthIncomeNAPSF" value="monthIncomeNAPSF" />
                    <label for="monthIncomeNAPSF">Use neighborhood average per SF</label>
                </div>
            </div>
        </div>
    )
}