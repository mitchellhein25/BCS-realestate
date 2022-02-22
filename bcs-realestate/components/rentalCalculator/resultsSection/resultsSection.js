import { useState, useEffect } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function ResultsSection({ state, setState }) {

    // Cash on Cash: Cash Flow / Total Cash Invested
    // Total Return: Cash Flow + Equity / Total Cash Invested
    function calculateReturn(cashOnCash, numYears) {
        const cashFlow = (state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12 * numYears;
        const cashInvested = (calculateTotalExpenses() * 12 * numYears) + (state.rehab.rehabCheckbox ? parseInt(state.rehab.repairCosts) : 0)
            + parseInt(state.purchase.closingCosts);
        const newPropertyValue = (state.rehab.rehabCheckbox ? state.rehab.afterRepairValue : state.purchase.purchasePrice) *
            ((1 + (state.rentalIncome.appreciation / 100)) ** numYears);
        const equity = newPropertyValue - (state.purchase.purchasePrice -
            (state.loanDetails.downPaymentCheckbox ? ((state.loanDetails.downPayment / 100) * state.purchase.purchasePrice) :
                state.loanDetails.downPayment)) - (state.rehab.rehabCheckbox ? parseInt(state.rehab.repairCosts) : 0);
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
        const principal = state.purchase.purchasePrice - (state.loanDetails.downPaymentCheckbox ?
                ((state.loanDetails.downPayment / 100) * state.purchase.purchasePrice) :
                state.loanDetails.downPayment);
        const interestRate = (state.loanDetails.interestRate/100)/12;
        const months = state.loanDetails.loanLength * 12;
        const numerator = principal * (interestRate * ((1 + interestRate) ** months));
        const denominator = ((1 + interestRate) ** months) - 1;
        return numerator / denominator;
    }

    function calculateVacancyAllowance() {
        return (state.expense.vacancy / 100) * state.rentalIncome.monthlyIncome;
    }

    function usePurchasePricePercent(name) {
        return state.expense[name + "Checkbox"] ?
            ((state.expense[name] / 100) * state.purchase.purchasePrice) / 12 :
            parseInt(state.expense[name])
    }

    function calculateTotalExpenses() {
        return calculateMortgage() + usePurchasePricePercent("insurance") + usePurchasePricePercent("propertyTaxes") +
            usePurchasePricePercent("repairMaintenance") + parseInt(calculateVacancyAllowance()) + usePurchasePricePercent("capEx") +
            usePurchasePricePercent("propertyManagement") + parseInt(state.expense.utilities) + parseInt(state.expense.hoa) +
            parseInt(state.expense.other)
    }

    function addCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const toCsv = () => {
        var propertyArray = [{
            "Address": state.propertyInfo.address,
            "City": state.propertyInfo.city,
            "State": state.propertyInfo.state,
            "Zip Code": state.propertyInfo.zipCode,
            "Square Footage": state.propertyInfo.squareFootage,
            "Purchase Price": state.purchase.purchasePrice,
            "1 Year Cash on Cash Return": calculateReturn(true, 1),
            "Closing Costs": state.purchase.closingCosts,
            "Down Payment": state.loanDetails.downPayment,
            "Interest Rate": state.loanDetails.interestRate,
            "Loan Length": state.loanDetails.loanLength,
            "After Repair Value": state.rehab.afterRepairValue,
            "Repair Costs": state.rehab.repairCosts,
            "Monthly Rental Income": state.rentalIncome.monthlyIncome,
            "Appreciation": state.rentalIncome.appreciation,
            "Property Taxes": state.expense.propertyTaxes,
            "Insurance": state.expense.insurance,
            "Repairs & Maintenance": state.expense.repairMaintenance,
            "Vacancy": state.expense.vacancy,
            "Capital Expenditures": state.expense.capEx,
            "Property Management": state.expense.propertyManagement,
            "Utilities": state.expense.utilities,
            "HOA": state.expense.hoa,
            "Other Expenses": state.expense.other,
        }]
        let workSheet = XLSX.utils.json_to_sheet(propertyArray);
        var workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, state.zip + " Results");
        XLSX.writeFile(workBook, state.zip + "_Results.xlsx");
    }

    return (
        <div className={rentalCalculatorStyles.resultsSection}>
            <h2 className={rentalCalculatorStyles.resultsMainHeader}>Results</h2>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Cash on Cash Return</h3>
                    <p><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(true, 1) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(true, 1)}
                        </span>%
                    </p>
                    <p><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(true, 5) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(true, 5)}
                        </span>%
                    </p>
                    <p><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(true, 10) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(true, 10)}
                        </span>%
                    </p>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Total Return</h3>
                    <p><b>1 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(false, 1) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(false, 1)}
                        </span>%
                    </p>
                    <p><b>5 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(false, 5) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(false, 5)}
                        </span>%
                    </p>
                    <p><b>10 Year:</b>&nbsp;&nbsp;&nbsp;
                        <span style={calculateReturn(false, 10) >= 0 ?
                            { color: "green" } : { color: "red" }}>{calculateReturn(false, 10)}
                        </span>%
                    </p>
                </div>
            </div>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Expenses</h3>
                    <p>
                        <span style={{ color: "red" }}>${addCommas(calculateTotalExpenses().toFixed(2))}
                        </span>
                    </p>
                    <div className={rentalCalculatorStyles.expenseBreakdownItems}>
                        <p>Mortgage: ${addCommas(calculateMortgage().toFixed(2))}</p>
                        <p>Insurance: ${addCommas(state.expense.insurance)}</p>
                        <p>Utilities: ${addCommas(state.expense.utilities)}</p>
                        <p>Taxes: ${addCommas(state.expense.propertyTaxes)}</p>
                        <p>Maintenance: ${addCommas(state.expense.repairMaintenance)}</p>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                    <p>
                        <span style={calculateReturn(false, 1) >= 0 ?
                            { color: "green" } : { color: "red" }}>
                            ${addCommas((state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2))}
                        </span> per month
                    </p>
                    <p>
                        <span style={calculateReturn(false, 1) >= 0 ?
                            { color: "green" } : { color: "red" }}>
                            ${addCommas(((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2))}
                        </span> per year
                    </p>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Income</h3>
                    <p><span style={{ color: "blue" }}>${addCommas(state.rentalIncome.monthlyIncome)}</span></p>
                </div>
            </div>
        </div>
    )
}