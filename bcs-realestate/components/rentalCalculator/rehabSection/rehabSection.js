import rentalCalculatorStyles from "./../rentalCalculator.module.css"
import CurrencyInput from 'react-currency-input-field';

export default function RehabSection({ state, setState }) {
    function handleChange(value, name) {
        setState(prevState => ({
            ...prevState,
            rehab: {
                ...prevState.rehab,
                [name]: [value]
            }
        }))
    }

    function handleChangeCheckbox(e) {
        setState(prevState => ({
            ...prevState,
            rehab: {
                ...prevState.rehab,
                [e.target.name]: !state.rehab[e.target.name]
            }
        }))
    }

    return (
        <div>
            <div className={rentalCalculatorStyles.row}>
                <h2 className={rentalCalculatorStyles.rehabHeader}>Rehab</h2>
            </div>
            <div className={rentalCalculatorStyles.rehabLabel} >
                <input type="checkbox" name="rehabCheckbox" checked={state.rehab.rehabCheckbox}
                    onChange={handleChangeCheckbox} />
                <label htmlFor="rehabCheckbox">Will you be rehabbing this property?</label>
            </div>
            {state.rehab.rehabCheckbox ?
                <div className={rentalCalculatorStyles.row}>
                    <div>
                        <div className={rentalCalculatorStyles.inputLabel} >
                            <label className={rentalCalculatorStyles.label} htmlFor="afterRepairValue">After Repair Value</label>
                            <CurrencyInput
                                type="text"
                                className={rentalCalculatorStyles.input}
                                name="afterRepairValue"
                                prefix="$"
                                defaultValue={state.rehab.afterRepairValue}
                                decimalsLimit={2}
                                allowNegativeValue={false}
                                onValueChange={(value, name) => handleChange(value, name)}
                            />
                        </div>
                        {/*<div>*/}
                        {/*    <input type="checkbox" name="afterRepairValueCheckBox" checked={state.rehab.afterRepairValueCheckBox}*/}
                        {/*        onChange={handleChange} />*/}
                        {/*    <label htmlFor="afterRepairValueCheckBox">Use neighborhood average per SF</label>*/}
                        {/*</div>*/}
                    </div>
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
                            onValueChange={(value, name) => handleChange(value, name)}
                        />
                    </div>
                </div> : null
                }
        </div>
    )
}