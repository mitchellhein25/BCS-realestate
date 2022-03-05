import MonthlyIncomeField from './rentalIncomeSectionFields/monthlyIncomeField'
import AppreciationField from './rentalIncomeSectionFields/appreciationField'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RentalIncomeSection({ state, setState }) {
    function handleChange(value, name) {
        if (name.includes("Checkbox")) {
            setState(prevState => ({
                ...prevState,
                rentalIncome: {
                    ...prevState.rentalIncome,
                    [name]: !state.rentalIncome[name]
                }
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                rentalIncome: {
                    ...prevState.rentalIncome,
                    [name]: [value]
                }
            }))
        }
    }

    return (
        <div className={rentalCalculatorStyles.calculatorSection + " " + rentalCalculatorStyles.calculatorSectionRight}>
            <h2 className={rentalCalculatorStyles.header}>Income</h2>
            <div className={rentalCalculatorStyles.row}>
                <MonthlyIncomeField
                    state={state}
                    handleChange={handleChange}
                />
                <AppreciationField
                    state={state}
                    handleChange={handleChange}
                />
            </div>
        </div>
    )
}