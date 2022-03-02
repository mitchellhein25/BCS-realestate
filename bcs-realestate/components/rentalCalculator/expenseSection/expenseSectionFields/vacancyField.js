import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function VacancyField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainer}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='vacancy'>Vacancy</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='vacancy'
                    suffix='%'
                    value={state.expense.vacancy}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='vacancy'>
                    per year
                        </label>
            </div>
            {/*<div>*/}
            {/*    <input type='checkbox' name='vacancyCheckbox' onChange={handleChangeCheckbox} checked={state.expense.vacancyCheckbox}/>*/}
            {/*    <label htmlFor='vacancyCheckbox'>Use Neighborhood Average</label>*/}
            {/*</div>*/}
        </div>
    )
}