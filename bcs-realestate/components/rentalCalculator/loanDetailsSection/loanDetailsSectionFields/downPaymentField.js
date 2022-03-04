import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../../rentalCalculator'

export default function DownPaymentField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='downPayment'>Down Payment</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='downPayment'
                    prefix={state.loanDetails.downPaymentCheckbox ? '' : '$'}
                    suffix={state.loanDetails.downPaymentCheckbox ? '%' : ''}
                    value={state.loanDetails.downPayment}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <div className={rentalCalculatorStyles.inputLabel} >
                    <input type='checkbox' name='downPaymentCheckbox' onChange={handleChangeCheckbox} checked={state.loanDetails.downPaymentCheckbox} />
                    <label className={rentalCalculatorStyles.checkboxText} htmlFor='downPaymentCheckbox'>{ppText}</label>
                </div>
            </div>
        </div>
    )
}