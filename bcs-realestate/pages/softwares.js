import MainLayout from "../components/mainLayout/mainLayout";
import DetailedListView from "../components/detailedListView/detailedListView";

export default function Softwares() {

    const softwareLinksList = [{
        name: "S1",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    },
    {
        name: "S2",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    },
    {
        name: "S3",
        photo: "/images/gregHeadshot.jpg",
        price: "Item 1 Price",
        description: "Item 1 Description"
    }]

    return (
        <MainLayout>
            <DetailedListView itemList={softwareLinksList}></DetailedListView>
        </MainLayout>
        )
}