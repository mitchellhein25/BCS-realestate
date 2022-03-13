import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import { usStates } from '../../../../staticData/states'

export default function StateField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='state'>State</label>
                <select className={rentalCalculatorStyles.input} name='state' onChange={handleChange} defaultValue='Choose'>
                    <option disabled hidden>Choose</option>
                    {usStates.map(stateItem => {
                        return (
                            <option value={stateItem.name} key={stateItem.name}>{stateItem.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}