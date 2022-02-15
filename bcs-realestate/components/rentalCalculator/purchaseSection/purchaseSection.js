import { useState,useEffect } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function PurchaseSection({ state, setState }) {
    function handleChange(e) {
        if (e.target.type == "checkbox") {
            setState(prevState => ({
                ...prevState,
                purchase: {
                    ...prevState.purchase,
                    [e.target.name]: !state.purchase[e.target.name]
                }
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                purchase: {
                    ...prevState.purchase,
                    [e.target.name]: [e.target.value]
                }
            }))
        }
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Purchase</h2>
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="purchasePrice"
                        placeholder="Purchase Price" onChange={handleChange} />
                    <div>
                        <input type="checkbox" name="purchasePriceCheckBox" checked={state.purchase.purchasePriceCheckBox}
                            onChange={handleChange} />
                        <label htmlFor="purchasePriceCheckBox">Use neighborhood average per SF</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="closingCosts"
                        placeholder="Closing Costs" onChange={handleChange} />
                    <div>
                        <input type="checkbox" name="closingCostsCheckBox" checked={state.purchase.closingCostsCheckBox}
                            onChange={handleChange} />
                        <label htmlFor="closingCostsCheckBox">Use BCS average %</label>
                    </div>
                </div>
            </div>
        </div>
    )
}