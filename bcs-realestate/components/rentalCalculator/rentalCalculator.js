import { useState } from 'react'
import PropertyInfoSection from './propertyInfoSection/propertyInfoSection'
import PurchaseSection from './purchaseSection/purchaseSection'
import RehabSection from './rehabSection/rehabSection'
import LoanDetailsSection from './loanDetailsSection/loanDetailsSection'
import RentalIncomeSection from './rentalIncomeSection/rentalIncomeSection'
import ExpenseSection from './expenseSection/expenseSection'

export default function RentalCalculator() {
    const [state, setState] = useState({
        propertyInfo: {
            address: "",
            city: "",
            state: "",
            zipCode: "",
            neighborhood: "",
            squareFootage: "",
        },
        purchase: {
            purchasePrice: "",
            purchasePriceCheckBox: false,
            closingCosts: "",
            closingCostsCheckBox: false

        },
        rehab: {
            rehabCheckbox: false,
            afterRepairValue: "",
            afterRepairValueCheckBox: false,
            repairCosts: "",
        },
        loanDetails: {
            downPayment: "",
            interestRate: "",
            loanLength: ""
        },
        rentalIncome: {
            monthlyIncome: "",
            monthlyIncomeCheckbox: false
        },
        expense: {
            propertyTaxes: "",
            propertyTaxesCheckbox: "",
            insurance: "",
            insuranceCheckbox: "",
            repairMaintenance: "",
            repairMaintenanceCheckbox: "",
            vacancy: "",
            vacancyCheckbox: "",
            capEx: "",
            capExCheckbox: "",
            propertyManagement: "",
            propertyManagementCheckbox: "",
            utilities: "",
            utilitiesCheckboxBryan: "",
            utilitiesCheckboxCStat: "",
            hoa: "",
            other: "",
        }
    });

    return (
        <div>
            <PropertyInfoSection state={state} setState={setState} ></PropertyInfoSection>
            <PurchaseSection state={state} setState={setState} ></PurchaseSection>
            <RehabSection state={state} setState={setState} ></RehabSection>
            <LoanDetailsSection state={state} setState={setState} ></LoanDetailsSection>
            <RentalIncomeSection state={state} setState={setState} ></RentalIncomeSection>
            <ExpenseSection state={state} setState={setState} ></ExpenseSection>
        </div>
    )
}