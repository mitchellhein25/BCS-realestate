import { useState } from 'react'
import PropertyInfoSection from './propertyInfoSection/propertyInfoSection'
import PurchaseSection from './purchaseSection/purchaseSection'
import RehabSection from './rehabSection/rehabSection'
import LoanDetailsSection from './loanDetailsSection/loanDetailsSection'
import RentalIncomeSection from './rentalIncomeSection/rentalIncomeSection'
import ExpenseSection from './expenseSection/expenseSection'
import ResultsSection from './resultsSection/resultsSection'
import rentalCalculatorStyles from "./rentalCalculator.module.css"

export default function RentalCalculator() {
    const purchasePrice = 290000;
    const [state, setState] = useState({
        propertyInfo: {
            address: "",
            city: "",
            state: "",
            zipCode: "",
            neighborhood: "",
            squareFootage: 0,
        },
        purchase: {
            purchasePrice: purchasePrice,
            purchasePriceCheckBox: false,
            closingCosts: 6000,
            closingCostsCheckBox: false

        },
        rehab: {
            rehabCheckbox: false,
            afterRepairValue: purchasePrice,
            afterRepairValueCheckBox: false,
            repairCosts: 0,
        },
        loanDetails: {
            downPayment: 10150,
            interestRate: 2.75,
            loanLength: 30
        },
        rentalIncome: {
            monthlyIncome: 2600,
            monthlyIncomeCheckbox: false
        },
        expense: {
            propertyTaxes: 536,
            propertyTaxesCheckbox: "",
            insurance: 125,
            insuranceCheckbox: "",
            repairMaintenance: 100,
            repairMaintenanceCheckbox: "",
            vacancy: 7,
            vacancyCheckbox: "",
            capEx: 100,
            capExCheckbox: "",
            propertyManagement: 0,
            propertyManagementCheckbox: "",
            utilities: 0,
            utilitiesCheckboxBryan: "",
            utilitiesCheckboxCStat: "",
            hoa: 0,
            other: 0,
        }
    });

    return (
        <div>
            <h1 className={rentalCalculatorStyles.header}>Property Analysis Calculator</h1>
            <div className={rentalCalculatorStyles.sectionColumnLeft}>
                <PropertyInfoSection state={state} setState={setState} ></PropertyInfoSection>
                <ExpenseSection state={state} setState={setState} ></ExpenseSection>
            </div>
            <div className={rentalCalculatorStyles.sectionColumnRight}>
                <PurchaseSection state={state} setState={setState} ></PurchaseSection>
                <LoanDetailsSection state={state} setState={setState} ></LoanDetailsSection>
                {/*<div className={rentalCalculatorStyles.sectionColumnLeft}></div>*/}
                <RehabSection state={state} setState={setState} ></RehabSection>
                {/*<div className={rentalCalculatorStyles.sectionColumnLeft}></div>*/}
                <RentalIncomeSection state={state} setState={setState} ></RentalIncomeSection>
            </div>
            <ResultsSection state={state} setState={setState} ></ResultsSection>
        </div>
    )
}