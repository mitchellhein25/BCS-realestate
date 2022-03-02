import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText, rentText, dpsfText } from '../../rentalCalculator'

export default function CapExField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='capEx'>CapEx</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='capEx'
                    prefix={!state.expense.capExCheckboxPP &
                        !state.expense.capExCheckboxRent &
                        state.expense.capExCheckboxSF ? '$' : ''}
                    suffix={state.expense.capExCheckboxSF ? '' : '%'}
                    value={state.expense.capEx}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='capEx'>
                    {state.expense.capExCheckbox ? 'per year' : 'per month'}
                </label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='capExCheckboxPP' onChange={handleChangeCheckbox} checked={state.expense.capExCheckboxPP} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='capExCheckbox'>{ppText}</label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='capExCheckboxRent' onChange={handleChangeCheckbox} checked={state.expense.capExCheckboxRent} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='capExCheckbox'>{rentText}</label>
            </div>
            <div className={rentalCalculatorStyles.inputLabel} >
                <input type='checkbox' name='capExCheckboxSF' onChange={handleChangeCheckbox} checked={state.expense.capExCheckboxSF} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='capExCheckbox'>{dpsfText}</label>
            </div>
        </div>
    )
}