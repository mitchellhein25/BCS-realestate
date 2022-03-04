import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function PurchasePriceField({ state, handleChangeCurrencyInput, handleChangeCheckbox }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor="purchasePrice">Purchase Price</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="purchasePrice"
                    prefix="$"
                    defaultValue={state.purchase.purchasePrice}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                {/*<div>*/}
                {/*    <input type="checkbox" name="purchasePriceCheckBox" checked={state.purchase.purchasePriceCheckBox}*/}
                {/*        onChange={handleChangeCheckbox} />*/}
                {/*    <label htmlFor="purchasePriceCheckBox">Use neighborhood average per SF</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}