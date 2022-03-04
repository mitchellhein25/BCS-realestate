import rentalCalculatorStyles from '../../rentalCalculator.module.css'

export default function AddressField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel}>
                <label className={rentalCalculatorStyles.label} htmlFor='address'>Address</label>
                <input className={rentalCalculatorStyles.input} type='text' name='address' placeholder='Enter Text'
                    onChange={handleChange} />
            </div>
        </div>
    )
}