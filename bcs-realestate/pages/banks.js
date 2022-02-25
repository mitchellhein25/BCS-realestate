import MainLayout from '../components/mainLayout/mainLayout'
import DetailedListView from '../components/detailedListView/detailedListView'
import bankStyles from '../styles/Banks.module.css'

export default function Banks() {

    const banksList = [{
        name: "City Bank",
        image: {
            photo: "/images/city-bank.png",
            photoDesc: "City Bank logo",
            photoWidth: 125,
            photoHeight: 125,
        },
        details: {
            phone: "(979) 846-7844",
            website: "https://www.city.bank/locations/details/mortgage-college-station-branch",
            websiteText: "Go to City Bank Website",
            //address: {
            //    addressLine1: "1103 University Dr. East, Ste. 100",
            //    addressLine2: "College Station, TX 77840"
            //}
        }
    },
    {
        name: "1st Alliance Mortgage",
        image: {
            photo: "/images/1stAM-Logo.jpg",
            photoDesc: "1st Alliance logo",
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: "(713) 626-5700",
            website: "https://1stalliancemortgage.com/",
            websiteText: "Go to 1st Alliance Mortgage Website",
            //address: {
            //    addressLine1: "750 William D. Fitch Pkwy, Suite 330",
            //    addressLine2: "College Station, Texas 77845"
            //}
        }
    },  
    {
        name: "Extraco",
        image: {
            photo: "/images/extraco-logo.svg",
            photoDesc: "Extraco logo",
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: "(979) 823-8810",
            website: "https://www.extracobanks.com/",
            websiteText: "Go to Extraco Bank Website",
            //address: {
            //    addressLine1: "2706 S. Texas Ave",
            //    addressLine2: "Bryan, TX 77802"
            //}
        }
    },
    {
        name: "Guaranty Bank & Trust",
        image: {
            photo: "/images/guaranty-logo.svg",
            photoDesc: "Guaranty Bank & Trust logo",
            photoWidth: 250,
            photoHeight: 60,
        },
        details: {
            phone: "(979) 485-5880",
            website: "https://answers.gnty.com/index.html?query=locations+near+me&referrerPageUrl=https%3A%2F%2Fwww.gnty.com%2F",
            websiteText: "Go to Guaranty Bank & Trust Website",
            //address: {
            //    addressLine1: "2700 Earl Rudder Freeway Suite 1000",
            //    addressLine2: "College Station, TX 77845"
            //}
        }
    },
    {
        name: "USAA (Military only)",
        image: {
            photo: "/images/usaa-logo.png",
            photoDesc: "USAA logo",
            photoWidth: 300,
            photoHeight: 150,
        },
        details: {
            phone: "(800) 531-0341",
            website: "https://www.usaa.com/inet/wc/bank-real-estate-mortgage-loans?wa_ref=pub_global_banking_home_mortgages_mortgages_main",
            websiteText: "Go to USAA Website",
            //address: {
            //    addressLine1: "2706 S. Texas Ave",
            //    addressLine2: "Bryan, TX 77802"
            //}
        }
    }
    ]

    const subHeader = `We know it can be hard to filter through the long list of banks you get by searching Google, so here 
                        is a list of some of our favorite and most trusted banks in the Bryan/College Station area!`

    return (
        <MainLayout>
            <div className={bankStyles.headerContainer}>
                <h1 className={bankStyles.mainHeader}>B/CS Banks</h1>
                <p className={bankStyles.subheader}>{subHeader}</p>
            </div>
            <DetailedListView itemList={banksList}></DetailedListView>
        </MainLayout>
    )
}