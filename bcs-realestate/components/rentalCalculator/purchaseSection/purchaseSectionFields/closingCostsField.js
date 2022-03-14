import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../../rentalCalculator';

export default function ClosingCostsField({ state, handleChangeCurrencyInput, handleChangeCheckbox }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor='closingCosts'>Closing Costs</label>
                <CurrencyInput
                    type='text'
                    className={rentalCalculatorStyles.input}
                    name='closingCosts'
                    prefix={state.purchase.closingCostsCheckboxPP ? '' : '$'}
                    suffix={state.purchase.closingCostsCheckboxPP ? '%' : ''}
                    value={state.purchase.closingCosts}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <div className={rentalCalculatorStyles.inputLabel} >
                    <input type='checkbox' name='closingCostsCheckboxPP' onChange={handleChangeCheckbox}
                        checked={state.purchase.closingCostsCheckboxPP} />
                    <label className={rentalCalculatorStyles.checkboxText} htmlFor='closingCostsCheckboxPP'>{ppText}</label>
                </div>
                {/*<div>*/}
                {/*    <input type='checkbox' name='closingCostsCheckBox' checked={state.purchase.closingCostsCheckBox}*/}
                {/*        onChange={handleChangeCheckbox} />*/}
                {/*    <label htmlFor='closingCostsCheckBox'>Use BCS average %</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}