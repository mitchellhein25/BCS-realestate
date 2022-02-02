import MainLayout from '../components/mainLayout/mainLayout'
import DetailedListView from '../components/detailedListView/detailedListView'

export default function Banks() {

    const banksList = [{
        name: "B1",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    },
    {
        name: "B2",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    },
    {
        name: "B3",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    }]

    return (
        <MainLayout>
            <DetailedListView itemList={banksList}></DetailedListView>
        </MainLayout>
    )
}