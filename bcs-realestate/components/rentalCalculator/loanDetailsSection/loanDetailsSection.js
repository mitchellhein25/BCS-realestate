import rentalCalculatorStyles from './../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText } from '../rentalCalculator'
import useWindowSize from '../../utils'

export default function LoanDetailsSection({ state, setState }) {
    const [width, height] = useWindowSize();
    const breakpoint = 1150;

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
        <div className={rentalCalculatorStyles.calculatorSection + ' ' + rentalCalculatorStyles.calculatorSectionRight}>
            <h2 className={rentalCalculatorStyles.header}>Loan Details</h2>
            {/*Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='downPayment'>Down Payment</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='downPayment'
                            prefix={state.loanDetails.downPaymentCheckbox ? '' : '$'}
                            suffix={state.loanDetails.downPaymentCheckbox ? '%' : ''}
                            value={state.loanDetails.downPayment}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <input type='checkbox' name='downPaymentCheckbox' onChange={handleChangeCheckbox} checked={state.loanDetails.downPaymentCheckbox} />
                            <label className={rentalCalculatorStyles.checkboxText} htmlFor='downPaymentCheckbox'>{ppText}</label>
                        </div>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='interestRate'>Interest Rate</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='interestRate'
                            suffix='%'
                            defaultValue={state.loanDetails.interestRate}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                </div>
                {width >= breakpoint ?
                    <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <label className={rentalCalculatorStyles.label} htmlFor='loanLength'>Loan Length</label>
                            <CurrencyInput
                                type='text'
                                className={rentalCalculatorStyles.input}
                                name='loanLength'
                                suffix=' years'
                                defaultValue={state.loanDetails.loanLength}
                                decimalsLimit={2}
                                allowNegativeValue={false}
                                onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                            />
                        </div>
                    </div> : null
                }
            </div>
            {/*Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='loanLength'>Loan Length</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='loanLength'
                            suffix=' years'
                            defaultValue={state.loanDetails.loanLength}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}