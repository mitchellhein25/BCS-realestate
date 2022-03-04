import DownPaymentField from './loanDetailsSectionFields/downPaymentField'
import InterestRateField from './loanDetailsSectionFields/interestRateField'
import LoanLengthField from './loanDetailsSectionFields/loanLengthField'
import rentalCalculatorStyles from './../rentalCalculator.module.css'
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
                <DownPaymentField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                <InterestRateField
                    state={state}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                {width >= breakpoint ?
                    <LoanLengthField
                        state={state}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    /> : null
                }
            </div>
            {/*Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                {width >= breakpoint ? null :
                    <LoanLengthField
                        state={state}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    />
                }
            </div>
        </div>
    )
}