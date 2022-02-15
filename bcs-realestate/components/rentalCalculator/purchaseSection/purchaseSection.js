import { useState,useEffect } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function PurchaseSection({ state, setState }) {

    useEffect(() => {
        console.log(state.purchase.purchasePrice)
    }, [])

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Purchase</h2>
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="purchasePrice"
                        placeholder="Purchase Price" onChange={(e) => setState(prevState => ({
                        purchase: {
                            ...prevState.purchase,
                            purchasePrice: e.target.value
                        }
                        }))} />
                    <div>
                        <input type="checkbox" name="purchPriceNAPSF" checked={state.purchase.purchasePriceCheckBox}
                            onChange={(e) => setState(prevState => ({
                                purchase: {
                                    ...prevState.purchase,
                                    purchasePriceCheckBox: !prevState.purchase.purchasePriceCheckBox
                                }
                            }))} />
                        <label for="purchPriceNAPSF">Use neighborhood average per SF</label>
                    </div>
                </div>
                <div>
                    <input className={rentalCalculatorStyles.input} type="number" name="closingCosts"
                        placeholder="Closing Costs" onChange={(e) => setState(prevState => ({
                            purchase: {
                                ...prevState.purchase,
                                closingCosts: e.target.value
                            }
                        }))} />
                    <div>
                        <input type="checkbox" name="closeCostsUBCSAVG" checked={state.purchase.closingCostsCheckBox}
                            onChange={(e) => setState(prevState => ({
                                purchase: {
                                    ...prevState.purchase,
                                    closingCostsCheckBox: !prevState.purchase.closingCostsCheckBox
                                }
                            }))} />
                        <label for="closeCostsUBCSAVG">Use BCS average %</label>
                    </div>
                </div>
            </div>
        </div>
    )
}