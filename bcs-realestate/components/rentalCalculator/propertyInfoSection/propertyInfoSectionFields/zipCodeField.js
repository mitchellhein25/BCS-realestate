import rentalCalculatorStyles from '../../rentalCalculator.module.css'

export default function ZipCodeField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel}>
                <label className={rentalCalculatorStyles.label} htmlFor='zipCode'>Zip Code</label>
                <input className={rentalCalculatorStyles.input} type='text' name='zipCode' placeholder='Enter Text'
                    onChange={handleChange} />
            </div>
        </div>
    )
}