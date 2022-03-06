export function downPayment(checkbox, downPayment, purchasePrice) {
    return checkbox ? ((downPayment / 100) * purchasePrice) : downPayment;
}

export function cashFlow(monthlyIncome, expenses, numYears) {
    return (monthlyIncome - expenses) * 12 * numYears;
}

export function repairCosts(rehabCheckbox, repairCostAmount) {
    return rehabCheckbox ? repairCostAmount : 0;
}

export function MonthlyExpensesTotalOverYears(expenses, numYears) {
    return expenses * 12 * numYears;
}

export function cashInvested(expensesTimesYears, repairCostAmount, closingCosts) {
    return expensesTimesYears + repairCostAmount + closingCosts;
}

export function afterRepairValue(rehabCheckbox, arv, purchasePrice) {
    return rehabCheckbox ? arv : purchasePrice;
}

export function appreciationFactor(appreciation, numYears) {
    return (1 + (appreciation / 100)) ** numYears;
}

export function calculateReturn(cashOnCash, totalCashFlow, totalCashInvested, equity) {
    // Cash on Cash: Cash Flow / Total Cash Invested
    // Total Return: Cash Flow + Equity / Total Cash Invested
    if (cashOnCash) {
        return (totalCashFlow / totalCashInvested) * 100;
    } else {
        return ((totalCashFlow + equity) / totalCashInvested) * 100;
    }
}

 // M = P ( i(1 + i)^n ) / ( (1 + i)^n - 1 )
//   P = principal loan amount
//   i = monthly interest rate
//   n = number of months required to repay the loan
export function calculateMortgage(purchasePrice, downPayment, interestRate, loanLength) {
    const principal = purchasePrice - downPayment;
    const interestPerMonth = (interestRate / 100) / 12;
    const months = loanLength * 12;
    const numerator = principal * (interestPerMonth * ((1 + interestPerMonth) ** months));
    const denominator = ((1 + interestPerMonth) ** months) - 1;
    return numerator / denominator;
}

export function calculateVacancyAllowance(vacancy, monthlyIncome) {
    return (vacancy / 100) * monthlyIncome;
}