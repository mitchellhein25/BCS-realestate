import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function ExpenseSection() {

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Expense Section</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="propertyTaxes" placeholder="Property Taxes" />
                    <div>
                        <input type="checkbox" id="propTaxesUPOPP" name="propTaxesUPOPP" value="propTaxesUPOPP" />
                        <label for="propTaxesUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="insurance" placeholder="Insurance" />
                    <div>
                        <input type="checkbox" id="insureUPOPP" name="insureUPOPP" value="insureUPOPP" />
                        <label for="insureUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="repairsMaintenance" placeholder="Repairs Maintenance" />
                    <div>
                        <input type="checkbox" id="repairMaintUPOPP" name="repairMaintUPOPP" value="repairMaintUPOPP" />
                        <label for="repairMaintUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
            </div>
            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="vacancy" placeholder="Vacancy" />
                    <div>
                        <input type="checkbox" id="vacancyUPOPP" name="vacancyUPOPP" value="vacancyUPOPP" />
                        <label for="vacancyUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="capEx" placeholder="CapEx" />
                    <div>
                        <input type="checkbox" id="capExUPOPP" name="capExUPOPP" value="capExUPOPP" />
                        <label for="capExUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="propertyManagement" placeholder="Property Management" />
                    <div>
                        <input type="checkbox" id="propManageUPOPP" name="propManageUPOPP" value="propManageUPOPP" />
                        <label for="propManageUPOPP">Use Percentage of Purchase Price</label>
                    </div>
                </div>
            </div>
            {/* Row 3*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="utilities" placeholder="Utilities" />
                    <div>
                        <input type="checkbox" id="utilitiesBAPSF" name="utilitiesBAPSF" value="utilitiesBAPSF" />
                        <label for="utilitiesBAPSF">Use Bryan Avg per SF</label>
                    </div>
                    <div>
                        <input type="checkbox" id="utilitiesCSAPSF" name="utilitiesCSAPSF" value="utilitiesCSAPSF" />
                        <label for="utilitiesCSAPSF">Use College Station Avg per SF</label>
                    </div>
                </div>
                <input className={rentalCalculatorStyles.input} type="number" name="hoa" placeholder="Hoa" />
                <input className={rentalCalculatorStyles.input} type="number" name="other" placeholder="Other" />
            </div>
        </div>
    )
}