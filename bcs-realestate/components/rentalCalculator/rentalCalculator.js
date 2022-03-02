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
import useWindowSize from '../utils'

export const ppText = 'Use % of PP';
export const rentText = 'Use % of Rent';
export const dpsfText = 'Use $ per SQ';

export default function RentalCalculator() {
    const [width, height] = useWindowSize();
    const breakpoint = 800;

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
            propertyTaxesCheckboxPP: true,
            insurance: 150,
            insuranceCheckboxPP: false,
            repairMaintenance: 1,
            repairMaintenanceCheckboxPP: true,
            repairMaintenanceCheckboxRent: false,
            repairMaintenanceCheckboxSF: false,
            vacancy: 7,
            vacancyCheckboxPP: false,
            capEx: 1,
            capExCheckboxPP: true,
            capExCheckboxRent: false,
            capExCheckboxSF: false,
            propertyManagement: 0,
            propertyManagementCheckboxPP: false,
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
                    {width >= breakpoint ?
                        <ExpenseSection state={state} setState={setState} ></ExpenseSection> : null
                    }
                </div>
                <div className={rentalCalculatorStyles.sectionColumnRight}>
                    <PurchaseSection state={state} setState={setState} ></PurchaseSection>
                    <LoanDetailsSection state={state} setState={setState} ></LoanDetailsSection>
                    <RehabSection state={state} setState={setState} ></RehabSection>
                    <RentalIncomeSection state={state} setState={setState} ></RentalIncomeSection>
                    {width >= breakpoint ? null :
                        <ExpenseSection state={state} setState={setState} ></ExpenseSection>
                    }
                </div>
            </div>
            <ResultsSection state={state} setState={setState} ></ResultsSection>
        </div>
    )
}