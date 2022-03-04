import rentalCalculatorStyles from '../../rentalCalculator.module.css'

export default function CityField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='city'>City</label>
                <input className={rentalCalculatorStyles.input} type='text' name='city' placeholder='Enter Text'
                    onChange={handleChange} />
            </div>
        </div>
    )
}