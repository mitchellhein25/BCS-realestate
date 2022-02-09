import { useState } from 'react'
import { usStates } from '../../../staticData/states'
import { neighborhoods } from '../../../staticData/neighborhoods'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function PropertyInfoSection() {

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Property Information</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="text" name="address" placeholder="Address"/>
                <input className={rentalCalculatorStyles.input} type="text" name="city" placeholder="City"/>
                <select className={rentalCalculatorStyles.input} name="state">
                    <option value="none" selected disabled hidden>State</option>
                    {usStates.map(stateItem => {
                        return (
                            <option value={stateItem.name}>{stateItem.name}</option>
                            )
                    })}
                </select>
                <input className={rentalCalculatorStyles.input} type="text" name="zipCode" placeholder="Zip Code"/>
            </div>

            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <select className={rentalCalculatorStyles.input} name="neighborhood">
                    <option value="none" selected disabled hidden>Neighborhood</option>
                    {neighborhoods.map(neighborhoodItem => {
                        return (
                            <option value={neighborhoodItem.name}>{neighborhoodItem.name}</option>
                        )
                    })}
                </select>
                <input className={rentalCalculatorStyles.input} type="number" name="squareFootage" placeholder="Square Footage"/>
            </div>
        </div>
    )
}