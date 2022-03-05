import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function AppreciationField({ state, handleChange }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor="appreciation">Appreciation</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="appreciation"
                    suffix="%"
                    defaultValue={state.rentalIncome.appreciation}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChange(value, name)}
                />
            </div>
            {/*<div>*/}
            {/*    <input type="checkbox" name="monthlyIncomeCheckbox" checked={state.rentalIncome.appreciationCheckbox}*/}
            {/*        onChange={handleChange} />*/}
            {/*    <label htmlFor="monthlyIncomeCheckbox">Use neighborhood average</label>*/}
            {/*</div>*/}
        </div>
    )
}