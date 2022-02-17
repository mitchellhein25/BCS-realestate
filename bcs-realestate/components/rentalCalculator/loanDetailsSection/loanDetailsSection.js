import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

export default function LoanDetailsSection({ state, setState }) {

    function handleChange(value, name) {
        setState(prevState => ({
            ...prevState,
            loanDetails: {
                ...prevState.loanDetails,
                [name]: [value]
            }
        }))
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.header}>Loan Details</h2>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="downPayment">Down Payment</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="downPayment"
                        prefix="$"
                        defaultValue={state.loanDetails.downPayment}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        onValueChange={(value, name) => handleChange(value, name)}
                    />
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
                        onValueChange={(value, name) => handleChange(value, name)}
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
                        onValueChange={(value, name) => handleChange(value, name)}
                    />
                </div>
            </div>
        </div>
    )
}