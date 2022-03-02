import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../../rentalCalculator'

export default function PropertyTaxesField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='propertyTaxes'>Property Taxes</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='propertyTaxes'
                    prefix={state.expense.propertyTaxesCheckboxPP ? '' : '$'}
                    suffix={state.expense.propertyTaxesCheckboxPP ? '%' : ''}
                    value={state.expense.propertyTaxes}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='propertyTaxes'>
                    {state.expense.propertyTaxesCheckboxPP ? 'per year' : 'per month'}
                </label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='propertyTaxesCheckboxPP' onChange={handleChangeCheckbox}
                    checked={state.expense.propertyTaxesCheckboxPP} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='propertyTaxesCheckboxPP'>{ppText}</label>
            </div>
        </div>
    )
}