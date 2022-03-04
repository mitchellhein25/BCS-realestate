import rentalCalculatorStyles from './../rentalCalculator.module.css'
import PropertyTaxesField from './expenseSectionFields/propertyTaxesField'
import InsuranceField from './expenseSectionFields/insuranceField'
import RepairMaintenanceField from './expenseSectionFields/repairMaintenanceField'
import VacancyField from './expenseSectionFields/vacancyField'
import CapExField from './expenseSectionFields/capExField'
import PropertyManagementField from './expenseSectionFields/propertyManagementField'
import UtilitiesField from './expenseSectionFields/utilitiesField'
import HoaField from './expenseSectionFields/hoaField'
import OtherField from './expenseSectionFields/otherField'
import useWindowSize from '../../utils'

export default function ExpenseSection({ state, setState }) {
    const [width, height] = useWindowSize();
    const breakpoint = 1150;

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
        if (e.target.name.includes("repairMaintenance")) {
                setState(prevState => ({
                    ...prevState,
                    expense: {
                        ...prevState.expense,
                        repairMaintenanceCheckboxPP: e.target.name.includes("PP") ? !state.expense[e.target.name] : false,
                        repairMaintenanceCheckboxRent: e.target.name.includes("Rent") ? !state.expense[e.target.name] : false,
                        repairMaintenanceCheckboxSF: e.target.name.includes("SF") ? !state.expense[e.target.name] : false,
                    }
                }))
        }
        else if (e.target.name.includes("capEx")){
            setState(prevState => ({
                ...prevState,
                expense: {
                    ...prevState.expense,
                    capExCheckboxPP: e.target.name.includes("PP") ? !state.expense[e.target.name] : false,
                    capExCheckboxRent: e.target.name.includes("Rent") ? !state.expense[e.target.name] : false,
                    capExCheckboxSF: e.target.name.includes("SF") ? !state.expense[e.target.name] : false,
                }
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                expense: {
                    ...prevState.expense,
                    [e.target.name]: !state.expense[e.target.name]
                }
            }))
        }
    }

    return (
        <div className={rentalCalculatorStyles.calculatorSection + ' ' + rentalCalculatorStyles.calculatorSectionLeft}>
            <h2 className={rentalCalculatorStyles.header}>Expenses</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <PropertyTaxesField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                <InsuranceField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                {width >= breakpoint ?
                    <RepairMaintenanceField
                        state={state}
                        handleChangeCheckbox={handleChangeCheckbox}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    /> : null
                }
            </div>
            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <VacancyField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                <CapExField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                {width >= breakpoint ?
                    <PropertyManagementField
                        state={state}
                        handleChangeCheckbox={handleChangeCheckbox}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    /> : null
                }
            </div>
            {/* Row 3*/}
            <div className={rentalCalculatorStyles.row}>
                <UtilitiesField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                <HoaField
                    state={state}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeCurrencyInput={handleChangeCurrencyInput}
                />
                {width >= breakpoint ?
                    <OtherField
                        state={state}
                        handleChangeCheckbox={handleChangeCheckbox}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    /> : null
                }
            </div>

            {width >= breakpoint ? null :
                // Row 4
                <>
                    <div className={rentalCalculatorStyles.row}>
                        <RepairMaintenanceField
                            state={state}
                            handleChangeCheckbox={handleChangeCheckbox}
                            handleChangeCurrencyInput={handleChangeCurrencyInput}
                        />
                        <PropertyManagementField
                            state={state}
                            handleChangeCheckbox={handleChangeCheckbox}
                            handleChangeCurrencyInput={handleChangeCurrencyInput}
                        />
                    </div>
                    {/*Row 5*/}
                    <div className={rentalCalculatorStyles.row}>
                        <OtherField
                            state={state}
                            handleChangeCheckbox={handleChangeCheckbox}
                            handleChangeCurrencyInput={handleChangeCurrencyInput}
                        />
                    </div>
                </>
            }
        </div>
    )
}