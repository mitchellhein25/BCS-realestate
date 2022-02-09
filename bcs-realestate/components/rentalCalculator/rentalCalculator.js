import { useState } from 'react'
import PropertyInfoSection from './propertyInfoSection/propertyInfoSection'
import PurchaseSection from './purchaseSection/purchaseSection'
import RehabSection from './rehabSection/rehabSection'
import LoanDetailsSection from './loanDetailsSection/loanDetailsSection'
import RentalIncomeSection from './rentalIncomeSection/rentalIncomeSection'
import ExpenseSection from './expenseSection/expenseSection'

export default function RentalCalculator() {

    return (
        <div>
            <PropertyInfoSection></PropertyInfoSection>
            <PurchaseSection></PurchaseSection>
            <RehabSection></RehabSection>
            <LoanDetailsSection></LoanDetailsSection>
            <RentalIncomeSection></RentalIncomeSection>
            <ExpenseSection></ExpenseSection>
        </div>
    )
}