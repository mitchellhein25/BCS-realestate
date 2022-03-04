import rentalCalculatorStyles from '../../rentalCalculator.module.css'

export default function SquareFootageField({ handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='squareFootage'>Square Footage</label>
                <input className={rentalCalculatorStyles.input} type='number' name='squareFootage'
                    placeholder='Enter Number' onChange={handleChange} />
            </div>
        </div>
    )
}