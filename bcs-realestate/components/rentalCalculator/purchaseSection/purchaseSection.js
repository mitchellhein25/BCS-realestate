import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

export default function PurchaseSection({ state, setState }) {
    function handleChangeCurrencyInput(value, name) {
        setState(prevState => ({
            ...prevState,
            purchase: {
                ...prevState.purchase,
                [name]: [value]
            }
        }))
    }

    function handleChangeCheckbox(e) {
        setState(prevState => ({
            ...prevState,
            expense: {
                ...prevState.expense,
                [e.target.name]: !state.expense[e.target.name]
            }
        }))
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Purchase</h2>
            <div className={rentalCalculatorStyles.row}>
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
        </div>
    )
}