import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

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
                <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="monthlyIncome">Monthly Income</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="monthlyIncome"
                            prefix="$"
                            defaultValue={state.rentalIncome.monthlyIncome}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            onValueChange={(value, name) => handleChange(value, name)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <input type="checkbox" name="monthlyIncomeCheckbox" checked={state.rentalIncome.monthlyIncomeCheckbox}*/}
                    {/*        onChange={handleChange} />*/}
                    {/*    <label htmlFor="monthlyIncomeCheckbox">Use neighborhood average per SF</label>*/}
                    {/*</div>*/}
                </div>
                <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText} htmlFor="appreciation">Yearly Appreciation</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="appreciation"
                            suffix="%"
                            defaultValue={state.rentalIncome.appreciation}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            onValueChange={(value, name) => handleChange(value, name)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <input type="checkbox" name="appreciationCheckbox" checked={state.rentalIncome.appreciationCheckbox}*/}
                    {/*        onChange={handleChange} />*/}
                    {/*    <label htmlFor="appreciationCheckbox">Use neighborhood average</label>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}