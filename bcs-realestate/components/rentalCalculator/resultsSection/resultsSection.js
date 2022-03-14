import * as XLSX from 'xlsx';
import rentalCalculatorStyles from '../rentalCalculator.module.css'
import primaryButtonStyles from '../../primaryButton/primaryButton.module.css'
import {
    downPayment, closingCosts, cashFlow, repairCosts, MonthlyExpensesTotalOverYears, cashInvested,
    afterRepairValue, appreciationFactor, calculateReturn, calculateMortgage, calculateVacancyAllowance
}
    from './resultsMethods'
import useWindowSize from '../../utils'

export default function ResultsSection({ state, setState }) {
    const [width, height] = useWindowSize();
    const breakpoint = 1000;

    function calculateReturnForResults(cashOnCash, numYears) {
        // Total Cash Flow
        const totalCashFlow = cashFlow(state.rentalIncome.monthlyIncome, calculateTotalExpenses(), numYears);

        // Cash Invested
        const downPaymentAmount = downPayment(state.loanDetails.downPaymentCheckbox, parseInt(state.loanDetails.downPayment), state.purchase.purchasePrice);
        const repairCostAmount = repairCosts(state.rehab.rehabCheckbox, parseInt(state.rehab.repairCosts));
        const expensesTimesYears = MonthlyExpensesTotalOverYears(calculateTotalExpenses(), numYears);
        const closingCostsTotal = closingCosts(state.purchase.closingCostsCheckboxPP, parseInt(state.purchase.closingCosts), state.purchase.purchasePrice);
        const totalCashInvested = cashInvested(expensesTimesYears, repairCostAmount, closingCostsTotal, downPaymentAmount)

        // New Property Value
        const arv = afterRepairValue(state.rehab.rehabCheckbox, state.rehab.afterRepairValue, state.purchase.purchasePrice);
        const totalAppreciation = appreciationFactor(state.rentalIncome.appreciation, numYears)
        const newPropertyValue = arv * totalAppreciation;

        // Equity
        const amountOwedOnLoan = state.purchase.purchasePrice - downPaymentAmount;
        const equity = newPropertyValue - amountOwedOnLoan;

        return calculateReturn(cashOnCash, totalCashFlow, totalCashInvested, equity)
    }

    function calculateMortgageForResults() {
        const calcDownPayment = downPayment(state.loanDetails.downPaymentCheckbox, state.loanDetails.downPayment, state.purchase.purchasePrice);
        return calculateMortgage(state.purchase.purchasePrice, calcDownPayment, state.loanDetails.interestRate, state.loanDetails.loanLength)
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
        return calculateMortgageForResults() + checkboxFilter('insurance') + checkboxFilter('propertyTaxes') +
            checkboxFilter('repairMaintenance') + parseInt(calculateVacancyAllowance(state.expense.vacancy, state.rentalIncome.monthlyIncome)) +
            checkboxFilter('capEx') + checkboxFilter('propertyManagement') +
            (isNaN(parseInt(state.expense.utilities)) ? 0 : parseInt(state.expense.utilities)) +
            (isNaN(parseInt(state.expense.hoa)) ? 0 : parseInt(state.expense.hoa)) +
            (isNaN(parseInt(state.expense.other)) ? 0 : parseInt(state.expense.other))
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
            'Square Footage (Sq. Ft)': state.propertyInfo.squareFootage,
            'Purchase Price ($)': state.purchase.purchasePrice,
            '1 Year Cash on Cash Return (%)': calculateReturnForResults(true, 1).toFixed(2),
            '5 Year Cash on Cash Return (%)': calculateReturnForResults(true, 5).toFixed(2),
            '10 Year Cash on Cash Return (%)': calculateReturnForResults(true, 10).toFixed(2),
            '1 Year Total Return (%)': calculateReturnForResults(false, 1).toFixed(2),
            '5 Year Total Return (%)': calculateReturnForResults(false, 5).toFixed(2),
            '10 Year Total Return (%)': calculateReturnForResults(false, 10).toFixed(2),
            'Total Monthly Expenses ($/mo)': calculateTotalExpenses().toFixed(2),
            'Monthly Income ($/mo)': state.rentalIncome.monthlyIncome,
            'Monthly Cash Flow ($/mo)': (state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2),
            'Yearly Cash Flow ($/yr)': ((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2),
            'Mortgage ($/mo)': calculateMortgageForResults().toFixed(2),
            'Insurance ($/mo)': checkboxFilter('insurance'),
            'Utilities ($/mo)': state.expense.utilities,
            'Property Taxes ($/mo)': checkboxFilter('propertyTaxes'),
            'Repairs & Maintenance ($/mo)': checkboxFilter('repairMaintenance'),
            'Closing Costs ($)': state.purchase.closingCosts,
            'Down Payment ($)': downPayment(state.loanDetails.downPaymentCheckbox, state.loanDetails.downPayment, state.purchase.purchasePrice).toFixed(2),
            'Interest Rate (%)': state.loanDetails.interestRate,
            'Loan Length (yrs)': state.loanDetails.loanLength,
            'After Repair Value ($)': state.rehab.afterRepairValue,
            'Repair Costs ($)': state.rehab.repairCosts,
            'Monthly Rental Income ($/mo)': state.rentalIncome.monthlyIncome,
            'Appreciation (%/yr)': state.rentalIncome.appreciation,
            'Vacancy (%)': state.expense.vacancy,
            'Capital Expenditures ($/mo)': checkboxFilter('capEx'),
            'Property Management ($/mo)': checkboxFilter('propertyManagement'),
            'HOA ($/mo)': state.expense.hoa,
            'Other Expenses ($/mo)': state.expense.other,
        }]
        let workSheet = XLSX.utils.json_to_sheet(propertyArray);
        var workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, state.zip + ' Results');
        XLSX.writeFile(workBook, state.propertyInfo.address + '_Results.xlsx');
    }

    return (
        <div>
            <h2 className={rentalCalculatorStyles.resultsMainHeader}>Results</h2>
            <div className={rentalCalculatorStyles.resultsSection}>
                <div className={rentalCalculatorStyles.resultsRow}>
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Cash on Cash Return</h3>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(true, 1) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(true, 1).toFixed(2)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(true, 5) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(true, 5).toFixed(2)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(true, 10) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(true, 10).toFixed(2)}
                            </span>%
                        </p>
                    </div>
                    <div className={rentalCalculatorStyles.resultsContainer}>
                        <h3 className={rentalCalculatorStyles.resultsHeader}>Total Return</h3>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(false, 1) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(false, 1).toFixed(2)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(false, 5) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(false, 5).toFixed(2)}
                            </span>%
                        </p>
                        <p className={rentalCalculatorStyles.returnsText + ' ' + rentalCalculatorStyles.smallMargin}><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                            <span style={calculateReturnForResults(false, 10) >= 0 ?
                                { color: 'green' } : { color: 'red' }}>{calculateReturnForResults(false, 10).toFixed(2)}
                            </span>%
                        </p>
                    </div>
                </div>
                {width >= breakpoint ? null :
                    <div className={rentalCalculatorStyles.resultsRow}>
                        <div className={rentalCalculatorStyles.resultsContainer}>
                            <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturnForResults(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas((state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2))}
                                </span> per month
                                </p>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturnForResults(false, 1) >= 0 ?
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
                            <p className={rentalCalculatorStyles.smallMargin}>Mortgage: ${
                                isNaN(parseInt(state.loanDetails.interestRate)) || isNaN(parseInt(state.loanDetails.loanLength)) ?
                                <span style={{ color: 'red' }}>Please fill out all loan details.</span> :
                                addCommas(calculateMortgageForResults().toFixed(2))
                            }</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Insurance: ${addCommas(checkboxFilter('insurance').toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Utilities: ${addCommas(parseInt(state.expense.utilities).toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Taxes: ${addCommas(checkboxFilter('propertyTaxes').toFixed(2))}</p>
                            <p className={rentalCalculatorStyles.smallMargin}>Vacancy:
                                ${addCommas(parseInt(calculateVacancyAllowance(state.expense.vacancy, state.rentalIncome.monthlyIncome)).toFixed(2))}
                            </p>
                            <p className={rentalCalculatorStyles.smallMargin}>Maintenance/CapEx:
                            ${addCommas((checkboxFilter('repairMaintenance') + checkboxFilter('capEx')).toFixed(2))}</p>
                        </div>
                    </div>
                    {width >= breakpoint ? 
                        <div className={rentalCalculatorStyles.resultsContainer}>
                            <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturnForResults(false, 1) >= 0 ?
                                    { color: 'green' } : { color: 'red' }}>
                                    ${addCommas((state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2))}
                                </span> per month
                            </p>
                            <p className={rentalCalculatorStyles.smallMargin}>
                                <span style={calculateReturnForResults(false, 1) >= 0 ?
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