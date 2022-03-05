import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function MonthlyIncomeField({ state, handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor="monthlyIncome">Monthly Income</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="monthlyIncome"
                    prefix="$"
                    defaultValue={state.rentalIncome.monthlyIncome}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChange(value, name)}
                />
            </div>
            {/*<div>*/}
            {/*    <input type="checkbox" name="monthlyIncomeCheckbox" checked={state.rentalIncome.monthlyIncomeCheckbox}*/}
            {/*        onChange={handleChange} />*/}
            {/*    <label htmlFor="monthlyIncomeCheckbox">Use neighborhood average per SF</label>*/}
            {/*</div>*/}
        </div>
    )
}