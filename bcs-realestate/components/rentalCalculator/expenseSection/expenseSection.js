import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

export default function ExpenseSection({ state, setState }) {

    function handleChangeCurrencyInput(value, name) {
        setState(prevState => ({
            ...prevState,
            expense: {
                ...prevState.expense,
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
            <h2 className={rentalCalculatorStyles.header}>Expenses</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="propertyTaxes">Property Taxes</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="propertyTaxes"
                            prefix={state.expense.propertyTaxesCheckbox ? "" : "$"}
                            suffix={state.expense.propertyTaxesCheckbox ? "% per year" : " per month"}
                            value={state.expense.propertyTaxes}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="propertyTaxesCheckbox" onChange={handleChangeCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor="propertyTaxesCheckbox">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="insurance">Insurance</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="insurance"
                            prefix={state.expense.insuranceCheckbox ? "" : "$"}
                            suffix={state.expense.insuranceCheckbox ? "% per year" : " per month"}
                            value={state.expense.insurance}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="insuranceCheckbox" onChange={handleChangeCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor="insuranceCheckbox">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="repairMaintenance">Repairs Maintenance</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="repairMaintenance"
                            prefix={state.expense.repairMaintenanceCheckbox ? "" : "$"}
                            suffix={state.expense.repairMaintenanceCheckbox ? "% per year" : " per month"}
                            value={state.expense.repairMaintenance}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="repairMaintenanceCheckbox" onChange={handleChangeCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor="repairMaintenanceCheckbox">Use Percentage of Purchase Price</label>
                    </div>
                </div>
            </div>
            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="vacancy">Vacancy</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="vacancy"
                            suffix="%"
                            value={state.expense.vacancy}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <input type="checkbox" name="vacancyCheckbox" onChange={handleChangeCheckbox} />*/}
                    {/*    <label for="vacancyCheckbox">Use Neighborhood Average</label>*/}
                    {/*</div>*/}
                </div>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="capEx">CapEx</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="capEx"
                            prefix={state.expense.capExCheckbox ? "" : "$"}
                            suffix={state.expense.capExCheckbox ? "% per year" : " per month"}
                            value={state.expense.capEx}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="capExCheckbox" onChange={handleChangeCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor="capExCheckbox">Use Percentage of Purchase Price</label>
                    </div>
                </div>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="propertyManagement">Property Management</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="propertyManagement"
                            prefix={state.expense.propertyManagement ? "" : "$"}
                            suffix={state.expense.propertyManagement ? "% per year" : " per month"}
                            value={state.expense.propertyManagement}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type="checkbox" name="propertyManagementCheckbox" onChange={handleChangeCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} for="propertyManagementCheckbox">Use Percentage of Purchase Price</label>
                    </div>
                </div>
            </div>
            {/* Row 3*/}
            <div className={rentalCalculatorStyles.row}>
                <div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor="utilities">Utilities</label>
                        <CurrencyInput
                            type="text"
                            className={rentalCalculatorStyles.input}
                            name="utilities"
                            prefix="$"
                            value={state.expense.utilities}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <input type="checkbox" name="utilitiesCheckboxBryan" onChange={handleChange} />*/}
                    {/*    <label for="utilitiesCheckboxBryan">Use Bryan Avg per SF</label>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input type="checkbox" name="utilitiesCheckboxCStat" onChange={handleChange} />*/}
                    {/*    <label for="utilitiesCheckboxCStat">Use College Station Avg per SF</label>*/}
                    {/*</div>*/}
                </div>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="hoa">HOA</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="hoa"
                        prefix="$"
                        value={state.expense.hoa}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        disableAbbreviations={true}
                        onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                    />
                </div>
                <div className={rentalCalculatorStyles.inputLabel} >
                    <label className={rentalCalculatorStyles.label} htmlFor="other">Other</label>
                    <CurrencyInput
                        type="text"
                        className={rentalCalculatorStyles.input}
                        name="other"
                        prefix="$"
                        value={state.expense.other}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        disableAbbreviations={true}
                        onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                    />
                </div>
            </div>
        </div>
    )
}