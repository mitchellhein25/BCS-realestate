import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function ClosingCostsField({ state, handleChangeCurrencyInput, handleChangeCheckbox }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor="closingCosts">Closing Costs</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="closingCosts"
                    prefix="$"
                    defaultValue={state.purchase.closingCosts}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                {/*<div>*/}
                {/*    <input type="checkbox" name="closingCostsCheckBox" checked={state.purchase.closingCostsCheckBox}*/}
                {/*        onChange={handleChangeCheckbox} />*/}
                {/*    <label htmlFor="closingCostsCheckBox">Use BCS average %</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}