import { useState } from "react"
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RehabSection({ state, setState }) {
    function handleChange(e) {
        if (e.target.type == "checkbox") {
            setState(prevState => ({
                ...prevState,
                rehab: {
                    ...prevState.purchase,
                    [e.target.name]: !state.rehab[e.target.name]
                }
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                rehab: {
                    ...prevState.purchase,
                    [e.target.name]: [e.target.value]
                }
            }))
        }
    }

    return (
        <div>
            <div>
                <h2 className={rentalCalculatorStyles.header}>Rehab</h2>
                <div>
                    <input type="checkbox" name="rehabCheckbox" checked={state.rehab.rehabCheckbox}
                        onChange={handleChange} />
                    <label htmlFor="rehabCheckbox">Will you be rehabbing this property?</label>
                    </div>
            </div>
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="afterRepairValue"
                        placeholder="After Repair Value" onChange={handleChange} />
                    <div>
                        <input type="checkbox" name="afterRepairValueCheckBox" checked={state.rehab.afterRepairValueCheckBox}
                            onChange={handleChange} />
                        <label htmlFor="afterRepairValueCheckBox">Use neighborhood average per SF</label>
                    </div>
                </div>
                <input className={rentalCalculatorStyles.input} type="number" name="repairCosts"
                    placeholder="Repair Costs" onChange={handleChange} />
            </div>
        </div>
    )
}