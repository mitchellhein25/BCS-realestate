import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function InterestRateField({ state, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='interestRate'>Interest Rate</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='interestRate'
                    suffix='%'
                    defaultValue={state.loanDetails.interestRate}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
            </div>
        </div>
    )
}