import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../../rentalCalculator'

export default function InsuranceField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='insurance'>Insurance</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='insurance'
                    prefix={state.expense.insuranceCheckboxPP ? '' : '$'}
                    suffix={state.expense.insuranceCheckboxPP ? '%' : ''}
                    value={state.expense.insurance}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='insurance'>
                    {state.expense.insuranceCheckboxPP ? 'per year' : 'per month'}
                </label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='insuranceCheckboxPP' onChange={handleChangeCheckbox} checked={state.expense.insuranceCheckboxPP} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='insuranceCheckboxPP'>{ppText}</label>
            </div>
        </div>
    )
}