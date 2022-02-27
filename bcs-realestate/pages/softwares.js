import MainLayout from '../components/mainLayout/mainLayout';
import DetailedListView from '../components/detailedListView/detailedListView';
import PageHeader from '../components/pageHeader/pageHeader';
import softwaresStyles from '../styles/softwares.module.css';

export default function Softwares() {

    const softwareList = [{
        name: 'Mint',
        image: {
            photo: '/images/mint-logo.png',
            photoDesc: 'Mint logo',
            photoWidth: 200,
            photoHeight: 80,
        },  
        details: {
            description: 'Personal Finance/Budget Tracking',
            features: 'Automated Expense Tracking, Net Worth Calculations, Budget Management',
            website: 'https://mint.intuit.com/',
            websiteText: 'Go to Mint Website',
        }
    },
    {
        name: 'Buildium',
        image: {
            photo: '/images/buildium-logo.png',
            photoDesc: 'Buildium logo',
            photoWidth: 200,
            photoHeight: 60,
        },
        details: {
            description: 'Property Management',
            features: 'Full Lead to Lease Capabilities, Take Online Payments, Maintenance Requests, Analytics',
            website: 'https://www.buildium.com/',
            websiteText: 'Go to Buildium Website',
        }
    },
    {
        name: 'QuickBooks',
        image: {
            photo: '/images/quickbooks-logo.png',
            photoDesc: 'QuickBooks logo',
            photoWidth: 200,
            photoHeight: 60,
        },
        details: {
            description: 'Accounting',
            features: 'Bookkeeping, Payroll, Invoice Management',
            website: 'https://quickbooks.intuit.com/',
            websiteText: 'Go to QuickBooks Website',
        }
    },
    {
        name: 'Monday',
        image: {
            photo: '/images/monday-logo.png',
            photoDesc: 'Monday logo',
            photoWidth: 200,
            photoHeight: 40,
        },
        details: {
            description: 'Project Management',
            features: 'Project Task Tracking, CRM, Timelines',
            website: 'https://monday.com/',
            websiteText: 'Go to Monday Website',
        }
    },
    {
        name: 'Zillow',
        image: {
            photo: '/images/zillow-logo.png',
            photoDesc: 'Zillow logo',
            photoWidth: 200,
            photoHeight: 40,
        },
        details: {
            description: 'Property Listing Portal',
            features: 'Manage or Browse Real Estate Listings for Rent and for Sale',
            website: 'https://www.zillow.com/',
            websiteText: 'Go to Zillow Website',
        }
    },
    {
        name: 'Realtor.com',
        image: {
            photo: '/images/realtor.com-logo.png',
            photoDesc: 'Realtor.com logo',
            photoWidth: 200,
            photoHeight: 40,
        },
        details: {
            description: 'Property Listing Portal',
            features: 'Manage or Browse Real Estate Listings for Rent and for Sale',
            website: 'https://www.realtor.com/',
            websiteText: 'Go to Realtor.com Website',
        }
    },
    {
        name: 'Calendly',
        image: {
            photo: '/images/calendly-logo.png',
            photoDesc: 'Calendly logo',
            photoWidth: 200,
            photoHeight: 40,
        },
        details: {
            description: 'Calendar Management',
            features: 'Automated Scheduling Tool',
            website: 'https://calendly.com/',
            websiteText: 'Go to Calendly Website',
        }
    },
    {
        name: 'Everlance',
        image: {
            photo: '/images/everlance-logo.png',
            photoDesc: 'Everlance logo',
            photoWidth: 200,
            photoHeight: 60,
        },
        details: {
            description: 'Mile Tracking',
            features: 'Automated Mile Tracking, Separate by Category, Tax Summary',
            website: 'https://www.everlance.com/',
            websiteText: 'Go to Everlance Website',
        }
    }]

    const header = 'Softwares'
    const subHeader = `Although tracking expenses with pen and paper & collecting cash from your tenants
                        door to door works for some, there are many software tools available that can make
                        your life easier. Here are some of the best softwares available to help you
                        maximize your time and become more efficient and profitable.`

    return (
        <MainLayout>
            <div className={softwaresStyles.headerContainer}>
                <PageHeader
                    header={header}
                    subHeader={subHeader}
                />
            </div>
            <div className={softwaresStyles.listView}>
                <DetailedListView itemList={softwareList}></DetailedListView>
            </div>
        </MainLayout>
        )
}