import * as XLSX from 'xlsx';
import rentalCalculatorStyles from '../rentalCalculator.module.css'
import primaryButtonStyles from '../../primaryButton/primaryButton.module.css'
import useWindowSize from '../../utils'

export default function ResultsSection({ state, setState }) {
    const [width, height] = useWindowSize();
    const breakpoint = 1000;

    function downPayment() {
        return state.loanDetails.downPaymentCheckbox ?
            ((state.loanDetails.downPayment / 100) * state.purchase.purchasePrice) :
            state.loanDetails.downPayment;
    }
    function calculateReturn(cashOnCash, numYears) {
        // Total Cash Flow
        const cashFlow = (state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12 * numYears;

        // Cash Invested
        const repairCosts = state.rehab.rehabCheckbox ? parseInt(state.rehab.repairCosts) : 0;
        const expensesTimesYears = calculateTotalExpenses() * 12 * numYears;
        const cashInvested = expensesTimesYears + repairCosts + parseInt(state.purchase.closingCosts);

        // New Property Value
        const afterRepairValue = state.rehab.rehabCheckbox ? state.rehab.afterRepairValue : state.purchase.purchasePrice;
        const totalAppreciation = (1 + (state.rentalIncome.appreciation / 100)) ** numYears;
        const newPropertyValue = afterRepairValue * totalAppreciation;

        // Equity
        const amountOwedOnLoan = state.purchase.purchasePrice - downPayment();
        const equity = newPropertyValue - amountOwedOnLoan - repairCosts;

        // Cash on Cash: Cash Flow / Total Cash Invested
        // Total Return: Cash Flow + Equity / Total Cash Invested
        if (cashOnCash) {
            return ((cashFlow / cashInvested) * 100).toFixed(2);
        } else {
            return (((cashFlow + equity) / cashInvested) * 100).toFixed(2);
        }
    }

    // M = P ( i(1 + i)^n ) / ( (1 + i)^n - 1 )
    //   P = principal loan amount
    //   i = monthly interest rate
    //   n = number of months required to repay the loan
    function calculateMortgage() {
        const principal = state.purchase.purchasePrice - downPayment();
        const interestRate = (state.loanDetails.interestRate/100)/12;
        const months = state.loanDetails.loanLength * 12;
        const numerator = principal * (interestRate * ((1 + interestRate) ** months));
        const denominator = ((1 + interestRate) ** months) - 1;
        return numerator / denominator;
    }

    function calculateVacancyAllowance() {
        return (state.expense.vacancy / 100) * state.rentalIncome.monthlyIncome;
    }

    function checkboxFilter(name) {
        var result = parseInt(state.expense[name])
        if (state.expense[name + 'CheckboxPP']) {
            result = ((state.expense[name] / 100) * state.purchase.purchasePrice) / 12;
        }
        if (state.expense[name + 'CheckboxRent']) {
            result = (state.expense[name] / 100) * state.rentalIncome.monthlyIncome;
        }
        if (state.expense[name + 'CheckboxSF']) {
            result = (state.expense[name] * state.propertyInfo.squareFootage) / 12;
        }
        return result;
    }

    function calculateTotalExpenses() {
        console.log("insurance: ", checkboxFilter('insurance'))
        console.log("propertyTaxes: ", checkboxFilter('propertyTaxes'))
        console.log("repairMaintenance: ", checkboxFilter('repairMaintenance'))
        console.log("propertyManagement: ", checkboxFilter('propertyManagement'))
        console.log("capEx: ", checkboxFilter('capEx'))
        return calculateMortgage() + checkboxFilter('insurance') + checkboxFilter('propertyTaxes') +
            checkboxFilter('repairMaintenance') + parseInt(calculateVacancyAllowance()) + checkboxFilter('capEx') +
            checkboxFilter('propertyManagement') + parseInt(state.expense.utilities) + parseInt(state.expense.hoa) +
            parseInt(state.expense.other)
    }

    function addCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const toCsv = () => {
        var propertyArray = [{
            'Address': state.propertyInfo.address,
            'City': state.propertyInfo.city,
            'State': state.propertyInfo.state,
            'Zip Code': state.propertyInfo.zipCode,
            'Square Footage': state.propertyInfo.squareFootage,
            'Purchase Price': state.purchase.purchasePrice,
            '1 Year Cash on Cash Return': calculateReturn(true, 1),
            '5 Year Cash on Cash Return': calculateReturn(true, 5),
            '10 Year Cash on Cash Return': calculateReturn(true, 10),
            '1 Year Total Return': calculateReturn(false, 1),
            '5 Year Total Return': calculateReturn(false, 5),
            '10 Year Total Return': calculateReturn(false, 10),
            'Total Monthly Expenses': calculateTotalExpenses().toFixed(2),
            'Monthly Income': state.rentalIncome.monthlyIncome,
            'Monthly Cash Flow': (state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2),
            'Yearly Cash Flow': ((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2),
            'Mortgage': calculateMortgage().toFixed(2),
            'Insurance': state.expense.insurance,
            'Utilities': state.expense.utilities,
            'Property Taxes': state.expense.propertyTaxes,
            'Repairs & Maintenance': state.expense.repairMaintenance,
            'Closing Costs': state.purchase.closingCosts,
            'Down Payment': state.loanDetails.downPayment,
            'Interest Rate': state.loanDetails.interestRate,
            'Loan Length': state.loanDetails.loanLength,
            'After Repair Value': state.rehab.afterRepairValue,
            'Repair Costs': state.rehab.repairCosts,
            'Monthly Rental Income': state.rentalIncome.monthlyIncome,
            'Appreciation': state.rentalIncome.appreciation,
            'Vacancy': state.expense.vacancy,
            'Capital Expenditures': state.expense.capEx,
            'Property Management': state.expense.propertyManagement,
            'HOA': state.expense.hoa,
            'Other Expenses': state.expense.other,
        }]
        let workSheet = XLSX.utils.json_to_sheet(propertyArray);
        var workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, state.zip + ' Results');
        XLSX.writeFile(workBook, state.zip + '_Results.xlsx');
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.resultsMainHeader}>Results</h2>
            <div className={rentalCalculatorStyles.resultsSection}>
                <div className={rentalCalculatorStyles.resultsRow}>
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Cash on Cash Return</h3>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(true, 1) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(true, 1)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(true, 5) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(true, 5)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(true, 10) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(true, 10)}
                            </span>%
                        </p>
                    </div>
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Total Return</h3>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(false, 1) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(false, 1)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(false, 5) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(false, 5)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturn(false, 10) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturn(false, 10)}
                            </span>%
                        </p>
                    </div>
                </div>
                {width >= breakpoint ? null :
                    <div className={rentalCalculatorStyles.resultsRow}>
                        <div className={rentalCalculatorStyles.resultsContainer}>
                            <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturn(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas((state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2))}
                                </span> per month
                                </p>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturn(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas(((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2))}
                                </span> per year
                            </p>
                        </div>
                    </div>
                }
                <div className={rentalCalculatorStyles.resultsRow}>
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Expenses</h3>
                        <p className={rentalCalculatorStyles.smallMargin}>
                            <span style={{ color: 'red' }}>${addCommas(calculateTotalExpenses().toFixed(2))}
                            </span>
                        </p>
                        <div className={rentalCalculatorStyles.expenseBreakdownItems}>
                            <p className={rentalCalculatorStyles.smallMargin}>Mortgage: ${addCommas(calculateMortgage().toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Insurance: ${addCommas(checkboxFilter('insurance').toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Utilities: ${addCommas(state.expense.utilities.toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Taxes: ${addCommas(checkboxFilter('propertyTaxes').toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Vacancy: ${addCommas(parseInt(calculateVacancyAllowance()).toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Maintenance/CapEx:
                            ${addCommas((checkboxFilter('repairMaintenance') + checkboxFilter('capEx')).toFixed(2))}</p>
                        </div>
                    </div>
                    {width >= breakpoint ? 
                        <div className={rentalCalculatorStyles.resultsContainer}>
                            <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturn(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas((state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2))}
                                </span> per month
                            </p>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturn(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas(((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2))}
                                </span> per year
                            </p>
                        </div> : null
                    }
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Income</h3>
                        <p className={rentalCalculatorStyles.smallMargin}><span style={{ color: 'blue' }}>${addCommas(state.rentalIncome.monthlyIncome)}</span></p>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.row}>
                    <div>
                    <button onClick={(e) => { toCsv() }} className={primaryButtonStyles.primaryButton + ' ' + rentalCalculatorStyles.exportButton}>
                        <p className={primaryButtonStyles.buttonText}> Export to Excel</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}