import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function LoanLengthField({ state, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='loanLength'>Loan Length</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='loanLength'
                    suffix=' years'
                    defaultValue={state.loanDetails.loanLength}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                { isNaN(parseInt(state.loanDetails.loanLength)) ?
                    <p style={{ color: 'red' }}>Please enter a Loan Length.</p> : null
                }
            </div>
        </div>
    )
}