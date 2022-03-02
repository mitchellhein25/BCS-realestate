import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../../rentalCalculator'

export default function PropertyManagementField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText} htmlFor='propertyManagement'>Property Management</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='propertyManagement'
                    prefix={state.expense.propertyManagementCheckbox ? '' : '$'}
                    suffix={state.expense.propertyManagementCheckbox ? '%' : ''}
                    value={state.expense.propertyManagement}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='propertyManagement'>
                    {state.expense.propertyManagementCheckbox ? 'per year' : 'per month'}
                </label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='propertyManagementCheckbox'
                    onChange={handleChangeCheckbox} checked={state.expense.propertyManagementCheckbox} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='propertyManagementCheckbox'>{ppText}</label>
            </div>
        </div>
    )
}