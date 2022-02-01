import MainLayout from '../components/mainLayout/mainLayout'
import ListView from '../components/listView/listView'
import rehabStyles from '../styles/rehab.module.css'

export default function Rehab() {

    const rehabItemList = [
        { name: "Flooring", 
          list: [{
                name: "F1",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            },
            {
                name: "F2",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            },
            {
                name: "F3",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            }]
        },
        {
            name: "Lighting",
            list: [{
                name: "L1",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            },
            {
                name: "L2",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            },
            {
                name: "L3",
                photo: "/images/gregHeadshot.jpg",
                price: "Item 1 Price",
                description: "Item 1 Description"
            }]
        },
    ]

    const servicesItemList = [
        { name: "Plumbing" },
        { name: "AC/Heat" }
    ]

    return (
        <>
            <MainLayout>
                <div className={rehabStyles.container}>
                    <ListView
                        title="Rehab Materials"
                        itemList={rehabItemList}
                    ></ListView>
                    <ListView
                        title="Services"
                        itemList={servicesItemList}
                    ></ListView>
                </div>
            </MainLayout>
        </>
    )
}