import PurchasePriceField from './purchaseSectionFields/purchasePriceField'
import ClosingCostsField from './purchaseSectionFields/closingCostsField'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

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
        <div className={rentalCalculatorStyles.calculatorSection + " " + rentalCalculatorStyles.calculatorSectionRight}>
            <h2 className={rentalCalculatorStyles.header}>Purchase</h2>
            <div className={rentalCalculatorStyles.row}>
                <PurchasePriceField
                    state={state}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                    handleChangeCheckbox={handleChangeCheckbox}
                />
                <ClosingCostsField
                    state={state}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                    handleChangeCheckbox={handleChangeCheckbox}
                />
            </div>
        </div>
    )
}