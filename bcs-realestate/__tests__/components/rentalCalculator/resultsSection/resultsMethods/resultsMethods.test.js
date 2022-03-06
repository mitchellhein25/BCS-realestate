// __tests__/components/rentalCalculator/resultsSection/resultsMethods/resultsMethods.test.js

import {
    downPayment, cashFlow, repairCosts, MonthlyExpensesTotalOverYears, cashInvested, afterRepairValue,
    appreciationFactor, calculateReturn, calculateMortgage, calculateVacancyAllowance
}
    from '../../../../../components/rentalCalculator/resultsSection/resultsMethods'
import '@testing-library/jest-dom'

describe('Results Methods tests', () => {
    it('Down Payment WITH % of Purchase Price', () => {
        const checkBox = true;
        const num = 5;
        const purchasePrice = 300000;
        const result = 15000;
        expect(downPayment(checkBox, num, purchasePrice)).toBe(result);
    });

    it('Down Payment WITHOUT % of Purchase Price', () => {
        const checkBox = false;
        const num = 15000;
        const purchasePrice = 300000;
        const result = 15000;
        expect(downPayment(checkBox, num, purchasePrice)).toBe(result);
    });

    it('Cash Flow: 1 year, positive', () => {
        const monthlyIncome = 1000;
        const expenses = 800;
        const numYears = 1;
        const result = 2400;
        expect(cashFlow(monthlyIncome, expenses, numYears)).toBe(result);
    });

    it('Cash Flow: 1 year, negative', () => {
        const monthlyIncome = 1000;
        const expenses = 1200;
        const numYears = 1;
        const result = -2400;
        expect(cashFlow(monthlyIncome, expenses, numYears)).toBe(result);
    });

    it('Repair Costs: rehabCheckbox false', () => {
        const rehabCheckbox = false;
        const repairCostAmount = 10000;
        const result = 0;
        expect(repairCosts(rehabCheckbox, repairCostAmount)).toBe(result);
    });

    it('Repair Costs: rehabCheckbox true', () => {
        const rehabCheckbox = true;
        const repairCostAmount = 10000;
        const result = 10000;
        expect(repairCosts(rehabCheckbox, repairCostAmount)).toBe(result);
    });

    it('MonthlyExpensesTotalOverYears', () => {
        const expenses = 100;
        const numYears = 3;
        const result = 3600;
        expect(MonthlyExpensesTotalOverYears(expenses, numYears)).toBe(result);
    });

    it('cashInvested', () => {
        const expensesTimesYears = 100;
        const repairCostAmount = 200;
        const closingCosts = 300;
        const result = 600;
        expect(cashInvested(expensesTimesYears, repairCostAmount, closingCosts)).toBe(result);
    });

    it('afterRepairValue: Box CHECKED', () => {
        const rehabCheckbox = true;
        const arv = 300000;
        const purchasePrice = 250000;
        const result = arv;
        expect(afterRepairValue(rehabCheckbox, arv, purchasePrice)).toBe(result);
    });

    it('afterRepairValue: Box UNCHECKED', () => {
        const rehabCheckbox = false;
        const arv = 300000;
        const purchasePrice = 250000;
        const result = purchasePrice;
        expect(afterRepairValue(rehabCheckbox, arv, purchasePrice)).toBe(result);
    });

    it('totalAppreciation', () => {
        const appreciation = 4;
        const numYears = 6;
        const result = "1.27";
        expect(appreciationFactor(appreciation, numYears).toFixed(2)).toBe(result);
    });

    it('calculateReturn: cashOnCash = true', () => {
        const cashOnCash = true;
        const totalCashFlow = 10000;
        const totalCashInvested = 5000;
        const equity = 3000;
        const result = 200;
        expect(calculateReturn(cashOnCash, totalCashFlow, totalCashInvested, equity)).toBe(result);
    });

    it('calculateReturn: cashOnCash = false', () => {
        const cashOnCash = false;
        const totalCashFlow = 10000;
        const totalCashInvested = 5000;
        const equity = 3000;
        const result = 260;
        expect(calculateReturn(cashOnCash, totalCashFlow, totalCashInvested, equity)).toBe(result);
    });

    it('calculateMortgage', () => {
        const purchasePrice = 320000;
        const downPayment = 20000
        const interestRate = 4;
        const loanLength = 30;
        const result = "1432.25";
        expect(calculateMortgage(purchasePrice, downPayment, interestRate, loanLength).toFixed(2)).toBe(result);
    });

    it('calculateVacancyAllowance', () => {
        const vacancy = 10;
        const monthlyIncome = 2000;
        const result = 200;
        expect(calculateVacancyAllowance(vacancy, monthlyIncome)).toBe(result);
    });
});