import { useState } from 'react'
import { usStates } from '../../../staticData/states'

export default function PropertyInfoSection() {

    return (
        <div>
            // Row 1
            <div>
                <input type="text"/>
                <input type="text"/>
                <select>
                    {usStates.map(stateItem => {
                        return (
                            <option value={stateItem.name}>{stateItem.name}</option>
                            )
                    })}
                </select>
                <input type="text"/>
            </div>

            // Row 2
            <div>
            </div>
        </div>
    )
}