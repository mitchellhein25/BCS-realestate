import MainLayout from '../components/mainLayout/mainLayout';
import DetailedListView from '../components/detailedListView/detailedListView';
import PageHeader from '../components/pageHeader/pageHeader';
import softwaresStyles from '../styles/Softwares.module.css';

export default function Softwares() {

    const softwareList = [{
        name: 'City Bank',
        image: {
            photo: '/images/city-bank.png',
            photoDesc: 'City Bank logo',
            photoWidth: 125,
            photoHeight: 125,
        },
        details: {
            phone: '(979) 846-7844',
            website: 'https://www.city.bank/locations/details/mortgage-college-station-branch',
            websiteText: 'Go to City Bank Website',
        }
    },
    {
        name: '1st Alliance Mortgage',
        image: {
            photo: '/images/1stAM-Logo.jpg',
            photoDesc: '1st Alliance logo',
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: '(713) 626-5700',
            website: 'https://1stalliancemortgage.com/',
            websiteText: 'Go to 1st Alliance Mortgage Website',
        }
    },
    {
        name: 'Extraco',
        image: {
            photo: '/images/extraco-logo.svg',
            photoDesc: 'Extraco logo',
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: '(979) 823-8810',
            website: 'https://www.extracobanks.com/',
            websiteText: 'Go to Extraco Bank Website',
        }
    },
    {
        name: 'Guaranty Bank & Trust',
        image: {
            photo: '/images/guaranty-logo.svg',
            photoDesc: 'Guaranty Bank & Trust logo',
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: '(979) 485-5880',
            website: 'https://answers.gnty.com/index.html?query=locations+near+me&referrerPageUrl=https%3A%2F%2Fwww.gnty.com%2F',
            websiteText: 'Go to Guaranty Bank & Trust Website',
        }
    },
    {
        name: 'USAA (Military only)',
        image: {
            photo: '/images/usaa-logo.png',
            photoDesc: 'USAA logo',
            photoWidth: 300,
            photoHeight: 150,
        },
        details: {
            phone: '(800) 531-0341',
            website: 'https://www.usaa.com/inet/wc/bank-real-estate-mortgage-loans?wa_ref=pub_global_banking_home_mortgages_mortgages_main',
            websiteText: 'Go to USAA Website',
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