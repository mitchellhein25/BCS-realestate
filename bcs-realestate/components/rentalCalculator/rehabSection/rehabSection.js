import AfterRepairValueField from './rehabSectionFields/AfterRepairValueField'
import RepairCostsField from './rehabSectionFields/repairCostsField'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function RehabSection({ state, setState }) {
    function handleChangeCurrencyInput(value, name) {
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
        <div className={rentalCalculatorStyles.calculatorSection + " " + rentalCalculatorStyles.calculatorSectionRight}>
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
                    <AfterRepairValueField
                        state={state}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                        handleChangeCheckbox={handleChangeCheckbox}
                    />
                    <RepairCostsField
                        state={state}
                        handleChangeCurrencyInput={handleChangeCurrencyInput}
                    />
                </div> : null
                }
        </div>
    )
}