import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function UtilitiesField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='utilities'>Utilities</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='utilities'
                    prefix='$'
                    value={state.expense.utilities}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='utilities'>
                    per month
                        </label>
            </div>
            {/*<div>*/}
            {/*    <input type='checkbox' name='utilitiesCheckboxBryan' onChange={handleChange} checked={state.expense.utilitiesCheckboxBryan}/>*/}
            {/*    <label htmlFor='utilitiesCheckboxBryan'>Use Bryan Avg per SF</label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type='checkbox' name='utilitiesCheckboxCStat' onChange={handleChange} checked={state.expense.utilitiesCheckboxCStat}/>*/}
            {/*    <label htmlFor='utilitiesCheckboxCStat'>Use College Station Avg per SF</label>*/}
            {/*</div>*/}
        </div>
    )
}