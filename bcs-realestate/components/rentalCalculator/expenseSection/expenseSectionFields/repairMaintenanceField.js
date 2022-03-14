import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';
import { ppText, rentText, dpsfText } from '../../rentalCalculator'

export default function RepairMaintenanceField({ state, handleChangeCheckbox, handleChangeCurrencyInput }) {

    return (
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
                    suffix={!state.expense.repairMaintenanceCheckboxPP &
                        !state.expense.repairMaintenanceCheckboxRent  ? '' : '%'}
                    value={state.expense.repairMaintenance}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    disableAbbreviations={true}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
                <label className={rentalCalculatorStyles.subLabel} htmlFor='repairMaintenance'>
                    {state.expense.repairMaintenanceCheckboxPP | state.expense.repairMaintenanceCheckboxSF ?
                        'per year' : 'per month'}
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
                <input type='checkbox' name='repairMaintenanceCheckboxSF' onChange={handleChangeCheckbox}
                    checked={state.expense.repairMaintenanceCheckboxSF} />
                <label className={rentalCalculatorStyles.checkboxText} htmlFor='repairMaintenanceCheckboxSF'>{dpsfText}</label>
                {isNaN(parseInt(state.propertyInfo.squareFootage)) && state.expense.repairMaintenanceCheckboxSF?
                    <span className={rentalCalculatorStyles.checkboxText} style={{ color: 'red' }}>
                        <br></br>Please enter Square Footage or select different checkbox.
                    </span>
                    : null
                }
            </div>
        </div>
    )
}