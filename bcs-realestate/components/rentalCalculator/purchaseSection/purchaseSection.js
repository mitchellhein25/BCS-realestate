import { useState } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function PurchaseSection() {

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Purchase</h2>
            <div class={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="purchasePrice" placeholder="Purchase Price" />
                    <div>
                        <input type="checkbox" id="purchPriceNAPSF" name="purchPriceNAPSF" value="purchPriceNAPSF" />
                        <label for="purchPriceNAPSF">Use neighborhood average per SF</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="closingCosts" placeholder="Closing Costs" />
                    <div>
                        <input type="checkbox" id="closeCostsUBCSAVG" name="closeCostsUBCSAVG" value="closeCostsUBCSAVG" />
                        <label for="closeCostsUBCSAVG">Use BCS average %</label>
                    </div>
                </div>
            </div>
        </div>
    )
}