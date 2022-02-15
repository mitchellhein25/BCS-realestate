import { useState } from 'react'
import { usStates } from '../../../staticData/states'
import { neighborhoods } from '../../../staticData/neighborhoods'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function PropertyInfoSection({ state, setState }) {

    function handleChange(e) {
        setState(prevState => ({
            ...prevState,
            propertyInfo: {
                ...prevState.propertyInfo,
                [e.target.name]: [e.target.value]
            }
        }))
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Property Information</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <input className={rentalCalculatorStyles.input} type="text" name="address" placeholder="Address"
                    onChange={handleChange} />
                <input className={rentalCalculatorStyles.input} type="text" name="city" placeholder="City"
                    onChange={handleChange} />
                <select className={rentalCalculatorStyles.input} name="state" onChange={handleChange} >
                    <option value="none" selected disabled hidden>State</option>
                    {usStates.map(stateItem => {
                        return (
                            <option value={stateItem.name}>{stateItem.name}</option>
                            )
                    })}
                </select>
                <input className={rentalCalculatorStyles.input} type="text" name="zipCode" placeholder="Zip Code"
                    onChange={handleChange} />
            </div>

            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <select className={rentalCalculatorStyles.input} name="neighborhood" onChange={handleChange} >
                    <option value="none" selected disabled hidden>Neighborhood</option>
                    {neighborhoods.map(neighborhoodItem => {
                        return (
                            <option value={neighborhoodItem.name}>{neighborhoodItem.name}</option>
                        )
                    })}
                </select>
                <input className={rentalCalculatorStyles.input} type="number" name="squareFootage"
                    placeholder="Square Footage" onChange={handleChange} />
            </div>
        </div>
    )
}