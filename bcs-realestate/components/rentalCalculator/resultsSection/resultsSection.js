import { useState, useEffect } from 'react'
import rentalCalculatorStyles from "./../rentalCalculator.module.css"

export default function ResultsSection({ state, setState }) {

    // Cash on Cash: Cash Flow / Total Cash Invested
    // Total Return: Cash Flow + Equity / Total Cash Invested
    function calculateReturn(cashOnCash, numYears) {
        const cashFlow = (state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12 * numYears;
        const cashInvested = (calculateTotalExpenses() * 12 * numYears) + parseInt(state.rehab.repairCosts) + parseInt(state.purchase.closingCosts);
        const newPropertyValue = state.rehab.afterRepairValue * ((1 + .04) ** numYears);
        const equity = newPropertyValue - (state.purchase.purchasePrice - state.loanDetails.downPayment) - parseInt(state.rehab.repairCosts);
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
        const principal = state.purchase.purchasePrice - state.loanDetails.downPayment;
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

    return (
        <div className={rentalCalculatorStyles.resultsSection}>
            <h2 className={rentalCalculatorStyles.resultsMainHeader}>Results</h2>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Cash on Cash Return</h3>
                    <p><b>1 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(true, 1) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(true, 1)}</span>%</p>
                    <p><b>5 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(true, 5) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(true, 5)}</span>%</p>
                    <p><b>10 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(true, 10) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(true, 10)}</span>%</p>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Total Return</h3>
                    <p><b>1 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(false, 1) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(false, 1)}</span>%</p>
                    <p><b>5 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(false, 5) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(false, 5)}</span>%</p>
                    <p><b>10 Year:</b>&nbsp;&nbsp;&nbsp;<span style={calculateReturn(false, 10) >= 0 ? { color: "green" } : { color: "red" }}>{calculateReturn(false, 10)}</span>%</p>
                </div>
            </div>
            <div className={rentalCalculatorStyles.row}>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Expenses</h3>
                    <p>${calculateTotalExpenses().toFixed(2)}</p>
                    <div className={rentalCalculatorStyles.expenseBreakdownItems}>
                        <p>Mortgage: ${calculateMortgage().toFixed(2)}</p>
                        <p>Insurance: ${state.expense.insurance}</p>
                        <p>Utilities: ${state.expense.utilities}</p>
                        <p>Taxes: ${state.expense.propertyTaxes}</p>
                        <p>Maintenance: ${state.expense.repairMaintenance}</p>
                    </div>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Cash Flow</h3>
                    <p>${(state.rentalIncome.monthlyIncome - calculateTotalExpenses()).toFixed(2)} per month</p>
                    <p>${((state.rentalIncome.monthlyIncome - calculateTotalExpenses()) * 12).toFixed(2)} per year</p>
                </div>
                <div className={rentalCalculatorStyles.resultsContainer}>
                    <h3 className={rentalCalculatorStyles.resultsHeader}>Monthly Income</h3>
                    <p>${state.rentalIncome.monthlyIncome}</p>
                </div>
            </div>
        </div>
    )
}