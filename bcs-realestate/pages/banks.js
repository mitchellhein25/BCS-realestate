import MainLayout from '../components/mainLayout/mainLayout'
import DetailedListView from '../components/detailedListView/detailedListView'

export default function Banks() {

    const banksList = [{
        name: "City Bank",
        photo: "/images/city-bank.png",
        photoDesc: "City Bank logo",
        details: {
            phone: "(979) 846-7844",
            website: "https://www.city.bank/locations/details/mortgage-college-station-branch",
            address: "1103 University Dr. East, Ste. 100 College Station, TX 77840"
        }
    },
    //{
    //    name: "1st Financial Bank",
    //    photo: "/images/gregHeadshot.jpg",
    //    details: {
    //        "phone": "Item 1 Price",
    //        "website": "Item 1 Description"
    //    }
    //},  
    //{
    //    name: "Extaco",
    //    photo: "/images/gregHeadshot.jpg",
    //    details: {
    //        "phone": "Item 1 Price",
    //        "website": "Item 1 Description"
    //    }
    //},
    //{
    //    name: "Guaranty Bank & Trust",
    //    photo: "/images/gregHeadshot.jpg",
    //    details: {
    //        "phone": "Item 1 Price",
    //        "website": "Item 1 Description"
    //    }
    //},
    //{
    //    name: "USAA",
    //    photo: "/images/gregHeadshot.jpg",
    //    details: {
    //        "phone": "Item 1 Price",
    //        "website": "Item 1 Description"
    //    }
    //}
    ]

    return (
        <MainLayout>
            <DetailedListView itemList={banksList}></DetailedListView>
        </MainLayout>
    )
}