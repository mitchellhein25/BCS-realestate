import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import { neighborhoods } from '../../../../staticData/neighborhoods'

export default function NeighborhoodField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel}>
                <label className={rentalCalculatorStyles.label} htmlFor='neighborhood'>Neighborhood</label>
                <select className={rentalCalculatorStyles.input} name='neighborhood' onChange={handleChange}>
                    <option value='none' selected disabled hidden>Choose Option</option>
                    {neighborhoods.map(neighborhoodItem => {
                        return (
                            <option value={neighborhoodItem.name} key={neighborhoodItem.name}>{neighborhoodItem.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}