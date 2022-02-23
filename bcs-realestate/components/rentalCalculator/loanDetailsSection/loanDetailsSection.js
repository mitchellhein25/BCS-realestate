import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

export default function LoanDetailsSection({ state, setState }) {

    function handleChangeCurrencyInput(value, name) {
        setState(prevState => ({
            ...prevState,
            loanDetails: {
                ...prevState.loanDetails,
                [name]: [value]
            }
        }))
    }

    function handleChangeCheckbox(e) {
        setState(prevState => ({
            ...prevState,
            loanDetails: {
                ...prevState.loanDetails,
                [e.target.name]: !state.loanDetails[e.target.name]
            }
        }))
    }

    return (
        <div className={rentalCalculatorStyles.calculatorSection + " " + rentalCalculatorStyles.calculatorSectionRight}>
            <h2 className={rentalCalculatorStyles.header}>Loan Details</h2>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="downPayment">Down Payment</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="downPayment"
                        prefix={state.loanDetails.downPaymentCheckbox ? "" : "$"}
                        suffix={state.loanDetails.downPaymentCheckbox ? "%" : ""}
                        value={state.loanDetails.downPayment}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        disableAbbreviations={true}
                        onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                    />
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="downPaymentCheckbox" onChange={handleChangeCheckbox} checked={state.loanDetails.downPaymentCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor="downPaymentCheckbox">Use % of Purchase Price</label>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="interestRate">Interest Rate</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="interestRate"
                        suffix="%"
                        defaultValue={state.loanDetails.interestRate}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                    />
                </div>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="loanLength">Loan Length</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="loanLength"
                        suffix=" years"
                        defaultValue={state.loanDetails.loanLength}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                    />
                </div>
            </div>
        </div>
    )
}