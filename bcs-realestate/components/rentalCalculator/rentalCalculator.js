import { useState } from 'react'
import PropertyInfoSection from './propertyInfoSection/propertyInfoSection'
import PurchaseSection from './purchaseSection/purchaseSection'
import RehabSection from './rehabSection/rehabSection'
import LoanDetailsSection from './loanDetailsSection/loanDetailsSection'
import RentalIncomeSection from './rentalIncomeSection/rentalIncomeSection'
import ExpenseSection from './expenseSection/expenseSection'
import ResultsSection from './resultsSection/resultsSection'
import PageHeader from '../pageHeader/pageHeader'
import rentalCalculatorStyles from "./rentalCalculator.module.css"

export default function RentalCalculator() {
    const purchasePrice = 300000;
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
            downPayment: 5,
            downPaymentCheckbox: true,
            interestRate: 4,
            loanLength: 30
        },
        rentalIncome: {
            monthlyIncome: 3000,
            monthlyIncomeCheckbox: false,
            appreciation: 4,
            appreciationCheckbox: false,

        },
        expense: {
            propertyTaxes: 2,
            propertyTaxesCheckbox: true,
            insurance: 150,
            insuranceCheckbox: false,
            repairMaintenance: 1,
            repairMaintenanceCheckbox: true,
            vacancy: 7,
            vacancyCheckbox: false,
            capEx: 1,
            capExCheckbox: true,
            propertyManagement: 0,
            propertyManagementCheckbox: false,
            utilities: 200,
            utilitiesCheckboxBryan: false,
            utilitiesCheckboxCStat: false,
            hoa: 0,
            other: 0,
        }
    });

    const header = "Property Analysis Calculator"
    const subHeader = `Place the numbers for the property you are analyzing, and the outputs will 
                        automatically change in the results section below. See if this potential investment
                        is worth a deeper look!`

    return (
        <div>
            <div className={rentalCalculatorStyles.headerContainer}>
                <PageHeader
                    header={header}
                    subHeader={subHeader}
                />
            </div>
            <div className={rentalCalculatorStyles.calcContainer}>
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
            </div>
            <ResultsSection state={state} setState={setState} ></ResultsSection>
        </div>
    )
}