import rentalCalculatorStyles from '../../rentalCalculator.module.css'
import CurrencyInput from 'react-currency-input-field';

export default function RepairCostsField({ state, handleChangeCurrencyInput }) {

    return (
        <div className={rentalCalculatorStyles.inputContainerNoCheck}>
            <div className={rentalCalculatorStyles.inputLabel} >
                <label className={rentalCalculatorStyles.label} htmlFor="repairCosts">Repair Costs</label>
                <CurrencyInput
                    type="text"
                    className={rentalCalculatorStyles.input}
                    name="repairCosts"
                    prefix="$"
                    defaultValue={state.rehab.repairCosts}
                    decimalsLimit={2}
                    allowNegativeValue={false}
                    onValueChange={(value, name) => handleChangeCurrencyInput(value, name)}
                />
            </div>
        </div>
    )
}