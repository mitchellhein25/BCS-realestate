import rentalCalculatorStyles from './../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import useWindowSize from '../../utils'
import { ppText } from '../rentalCalculator'

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
        setState(prevState => ({
            ...prevState,
            expense: {
                ...prevState.expense,
                [e.target.name]: !state.expense[e.target.name]
            }
        }))
    }

    return (
        <div className={rentalCalculatorStyles.calculatorSection + ' ' + rentalCalculatorStyles.calculatorSectionLeft}>
            <h2 className={rentalCalculatorStyles.header}>Expenses</h2>
            {/* Row 1*/}
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='propertyTaxes'>Property Taxes</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='propertyTaxes'
                            prefix={state.expense.propertyTaxesCheckbox ? '' : '$'}
                            suffix={state.expense.propertyTaxesCheckbox ? '%' : ''}
                            value={state.expense.propertyTaxes}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='propertyTaxes'>
                            {state.expense.propertyTaxesCheckbox ? 'per year' : 'per month'}
                        </label>
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type='checkbox' name='propertyTaxesCheckbox' onChange={handleChangeCheckbox}
                            checked={state.expense.propertyTaxesCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor='propertyTaxesCheckbox'>{ppText}</label>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='insurance'>Insurance</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='insurance'
                            prefix={state.expense.insuranceCheckbox ? '' : '$'}
                            suffix={state.expense.insuranceCheckbox ? '%' : ''}
                            value={state.expense.insurance}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='insurance'>
                            {state.expense.insuranceCheckbox ? 'per year' : 'per month'}
                        </label>
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type='checkbox' name='insuranceCheckbox' onChange={handleChangeCheckbox} checked={state.expense.insuranceCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor='insuranceCheckbox'>{ppText}</label>
                    </div>
                </div>
                {width >= breakpoint ?
                    <div className={rentalCalculatorStyles.inputContainer}>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText}
                                htmlFor='repairMaintenance'>Repairs Maintenance</label>
                            <CurrencyInput
                                type='text'
                                className={rentalCalculatorStyles.input}
                                name='repairMaintenance'
                                prefix={state.expense.repairMaintenanceCheckbox ? '' : '$'}
                                suffix={state.expense.repairMaintenanceCheckbox ? '%' : ''}
                                value={state.expense.repairMaintenance}
                                decimalsLimit={2}
                                allowNegativeValue={false}
                                disableAbbreviations={true}
                                onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                            />
                            <label className={rentalCalculatorStyles.subLabel} htmlFor='repairMaintenance'>
                                {state.expense.repairMaintenanceCheckbox ? 'per year' : 'per month'}
                            </label>
                        </div>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <input type='checkbox' name='repairMaintenanceCheckbox' onChange={handleChangeCheckbox} checked={state.expense.repairMaintenanceCheckbox} />
                            <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckbox'>{ppText}</label>
                        </div>
                    </div> : null
                }
            </div>
            {/* Row 2*/}
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='vacancy'>Vacancy</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='vacancy'
                            suffix='%'
                            value={state.expense.vacancy}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='vacancy'>
                            per year
                        </label>
                    </div>
                    {/*<div>*/}
                    {/*    <input type='checkbox' name='vacancyCheckbox' onChange={handleChangeCheckbox} checked={state.expense.vacancyCheckbox}/>*/}
                    {/*    <label htmlFor='vacancyCheckbox'>Use Neighborhood Average</label>*/}
                    {/*</div>*/}
                </div>
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='capEx'>CapEx</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='capEx'
                            prefix={state.expense.capExCheckbox ? '' : '$'}
                            suffix={state.expense.capExCheckbox ? '%' : ''}
                            value={state.expense.capEx}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='capEx'>
                            {state.expense.capExCheckbox ? 'per year' : 'per month'}
                        </label>
                    </div>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <input type='checkbox' name='capExCheckbox' onChange={handleChangeCheckbox} checked={state.expense.capExCheckbox} />
                        <label className={rentalCalculatorStyles.checkboxText} htmlFor='capExCheckbox'>{ppText}</label>
                    </div>
                </div>
                {width >= breakpoint ?
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
                    </div> : null
                }
            </div>
            {/* Row 3*/}
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.inputContainer}>
                    <div className={rentalCalculatorStyles.inputLabel} >
                        <label className={rentalCalculatorStyles.label} htmlFor='utilities'>Utilities</label>
                        <CurrencyInput
                            type='text'
                            className={rentalCalculatorStyles.input}
                            name='utilities'
                            prefix='$'
                            value={state.expense.utilities}
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            disableAbbreviations={true}
                            onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                        />
                        <label className={rentalCalculatorStyles.subLabel} htmlFor='utilities'>
                            per month
                        </label>
                    </div>
                    {/*<div>*/}
                    {/*    <input type='checkbox' name='utilitiesCheckboxBryan' onChange={handleChange} checked={state.expense.utilitiesCheckboxBryan}/>*/}
                    {/*    <label htmlFor='utilitiesCheckboxBryan'>Use Bryan Avg per SF</label>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input type='checkbox' name='utilitiesCheckboxCStat' onChange={handleChange} checked={state.expense.utilitiesCheckboxCStat}/>*/}
                    {/*    <label htmlFor='utilitiesCheckboxCStat'>Use College Station Avg per SF</label>*/}
                    {/*</div>*/}
                </div>
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
                                <label className={rentalCalculatorStyles.label + ' ' + rentalCalculatorStyles.smallerText} htmlFor='repairMaintenance'>Repairs Maintenance</label>
                                <CurrencyInput
                                    type='text'
                                    className={rentalCalculatorStyles.input}
                                    name='repairMaintenance'
                                    prefix={state.expense.repairMaintenanceCheckbox ? '' : '$'}
                                    suffix={state.expense.repairMaintenanceCheckbox ? '%' : ''}
                                    value={state.expense.repairMaintenance}
                                    decimalsLimit={2}
                                    allowNegativeValue={false}
                                    disableAbbreviations={true}
                                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                                />
                                <label className={rentalCalculatorStyles.subLabel} htmlFor='repairMaintenance'>
                                    {state.expense.repairMaintenanceCheckbox ? 'per year' : 'per month'}
                                </label>
                            </div>
                            <div className={rentalCalculatorStyles.inputLabel} >
                                <input type='checkbox' name='repairMaintenanceCheckbox' onChange={handleChangeCheckbox} checked={state.expense.repairMaintenanceCheckbox} />
                                <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckbox'>{ppText}</label>
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