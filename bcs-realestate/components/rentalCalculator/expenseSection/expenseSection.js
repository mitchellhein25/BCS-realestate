import rentalCalculatorStyles from './../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import PropertyTaxesField from './expenseSectionFields/propertyTaxesField'
import InsuranceField from './expenseSectionFields/insuranceField'
import RepairMaintenanceField from './expenseSectionFields/repairMaintenanceField'
import VacancyField from './expenseSectionFields/vacancyField'
import CapExField from './expenseSectionFields/capExField'
import PropertyManagementField from './expenseSectionFields/propertyManagementField'
import UtilitiesField from './expenseSectionFields/utilitiesField'
import useWindowSize from '../../utils'
import { ppText, rentText, dpsfText } from '../rentalCalculator'

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
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='hoa'>HOA</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='hoa'
                            prefix='$'
                            value={state.expense.hoa}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='hoa'>
                            per month
                        </label>
                    </div>
                </div>
                {width >= breakpoint ?
                    <div className={rentalCalculatorStyles.inputContainer}>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <label className={rentalCalculatorStyles.label} htmlFor='other'>Other</label>
                            <CurrencyInput
                                type='text'
                                className={rentalCalculatorStyles.input}
                                name='other'
                                prefix='$'
                                value={state.expense.other}
                                decimalsLimit={2}
                                allowNegativeValue={false}
                                disableAbbreviations={true}
                                onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                            />
                            <label className={rentalCalculatorStyles.subLabel} htmlFor='other'>
                                per month
                            </label>
                        </div>
                    </div>: null
                }
            </div>

            {width >= breakpoint ? null :
                // Row 4
                <>
                    <div className={rentalCalculatorStyles.row}>
                        <div className={rentalCalculatorStyles.inputContainer}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText}
                                    htmlFor='repairMaintenance'>Repairs Maintenance</label>
                                <CurrencyInput
                                    type='text'
                                    className={rentalCalculatorStyles.input}
                                    name='repairMaintenance'
                                    prefix={!state.expense.repairMaintenanceCheckboxPP &
                                        !state.expense.repairMaintenanceCheckboxRent ? '$' : ''}
                                    suffix={state.expense.repairMaintenanceCheckboxSQ ? '' : '%'}
                                    value={state.expense.repairMaintenance}
                                    decimalsLimit={2}
                                    allowNegativeValue={false}
                                    disableAbbreviations={true}
                                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                                />
                                <label className={rentalCalculatorStyles.subLabel} htmlFor='repairMaintenance'>
                                    {state.expense.repairMaintenanceCheckboxPP ? 'per year' : 'per month'}
                                </label>
                            </div>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <input type='checkbox' name='repairMaintenanceCheckboxPP' onChange={handleChangeCheckbox}
                                    checked={state.expense.repairMaintenanceCheckboxPP} />
                                <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckboxPP'>{ppText}</label>
                            </div>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <input type='checkbox' name='repairMaintenanceCheckboxRent' onChange={handleChangeCheckbox}
                                    checked={state.expense.repairMaintenanceCheckboxRent} />
                                <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckboxRent'>{rentText}</label>
                            </div>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <input type='checkbox' name='repairMaintenanceCheckboxSQ' onChange={handleChangeCheckbox}
                                    checked={state.expense.repairMaintenanceCheckboxSQ} />
                                <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckboxSQ'>{dpsfText}</label>
                            </div>
                        </div>
                        <div className={rentalCalculatorStyles.inputContainer}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText} htmlFor='propertyManagement'>Property Management</label>
                                <CurrencyInput
                                    type='text'
                                    className={rentalCalculatorStyles.input}
                                    name='propertyManagement'
                                    prefix={state.expense.propertyManagementCheckbox ? '' : '$'}
                                    suffix={state.expense.propertyManagementCheckbox ? '%' : ''}
                                    value={state.expense.propertyManagement}
                                    decimalsLimit={2}
                                    allowNegativeValue={false}
                                    disableAbbreviations={true}
                                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                                />
                                <label className={rentalCalculatorStyles.subLabel} htmlFor='propertyManagement'>
                                    {state.expense.propertyManagementCheckbox ? 'per year' : 'per month'}
                                </label>
                            </div>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <input type='checkbox' name='propertyManagementCheckbox'
                                    onChange={handleChangeCheckbox} checked={state.expense.propertyManagementCheckbox} />
                                <label className={rentalCalculatorStyles.checkboxText} htmlFor='propertyManagementCheckbox'>{ppText}</label>
                            </div>
                        </div>
                    </div>
                    {/*Row 5*/}
                    <div className={rentalCalculatorStyles.row}>
                        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <label className={rentalCalculatorStyles.label} htmlFor='other'>Other</label>
                                <CurrencyInput
                                    type='text'
                                    className={rentalCalculatorStyles.input}
                                    name='other'
                                    prefix='$'
                                    value={state.expense.other}
                                    decimalsLimit={2}
                                    allowNegativeValue={false}
                                    disableAbbreviations={true}
                                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                                />
                                <label className={rentalCalculatorStyles.subLabel} htmlFor='other'>
                                    per month
                                </label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}