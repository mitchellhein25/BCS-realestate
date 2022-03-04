import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function AfterRepairValueField({ state, handleChangeCurrencyInput, handleChangeCheckbox }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText} htmlFor="afterRepairValue">After Repair Value</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="afterRepairValue"
                    prefix="$"
                    defaultValue={state.rehab.afterRepairValue}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
            </div>
            {/*<div>*/}
            {/*    <input type="checkbox" name="afterRepairValueCheckBox" checked={state.rehab.afterRepairValueCheckBox}*/}
            {/*        onChange={handleChange} />*/}
            {/*    <label htmlFor="afterRepairValueCheckBox">Use neighborhood average per SF</label>*/}
            {/*</div>*/}
        </div>
    )
}