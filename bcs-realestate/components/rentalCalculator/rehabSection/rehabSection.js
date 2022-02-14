import { useState } from "react"
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RehabSection({ state, setState }) {

    return (
        <div>
            <div>
                <h2 className={rentalCalculatorStyles.header}>Rehab</h2>
                <div>
                    <input type="checkbox" id="willYouRehab" name="willYouRehab" value="willYouRehab" />
                    <label for="willYouRehab">Will you be rehabbing this property?</label>
                    </div>
            </div>
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="afterRepairValue" placeholder="After Repair Value" />
                    <div>
                        <input type="checkbox" id="arvNAPSF" name="arvNAPSF" value="arvNAPSF" />
                        <label for="arvNAPSF">Use neighborhood average per SF</label>
                    </div>
                </div>
                <input className={rentalCalculatorStyles.input} type="number" name="repairCosts" placeholder="Repair Costs"/>
            </div>
        </div>
    )
}