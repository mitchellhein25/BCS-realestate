import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RentalIncomeSection({ state, setState }) {
    function handleChange(e) {
        if (e.target.type == "checkbox") {
            setState(prevState => ({
                ...prevState,
                rentalIncome: {
                    ...prevState.purchase,
                    [e.target.name]: !state.rentalIncome[e.target.name]
                }
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                rentalIncome: {
                    ...prevState.purchase,
                    [e.target.name]: [e.target.value]
                }
            }))
        }
    }
    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Rental Income</h2>
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="number" name="monthlyIncome"
                    placeholder="Monthly Income" onChange={handleChange} />
                <div>
                    <input type="checkbox" name="monthlyIncomeCheckbox" checked={state.rentalIncome.monthlyIncomeCheckbox}
                        onChange={handleChange} />
                    <label for="monthlyIncomeCheckbox">Use neighborhood average per SF</label>
                </div>
            </div>
        </div>
    )
}