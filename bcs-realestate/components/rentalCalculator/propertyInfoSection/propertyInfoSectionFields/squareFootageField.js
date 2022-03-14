import rentalCalculatorStyles from '../../rentalCalculator.module.css'

export default function SquareFootageField({ state, handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='squareFootage'>Square Footage</label>
                <input className={rentalCalculatorStyles.input} name='squareFootage' type='number'
                    value={state.propertyInfo.squareFootage} onChange={handleChange} />
            </div>
        </div>
    )
}