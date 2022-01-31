import MainLayout from '../components/mainLayout/mainLayout'
import ListView from '../components/listView/listView'
import rehabStyles from '../styles/rehab.module.css'

export default function Rehab() {

    const rehabItemList = [
        { name: "Flooring" },
        { name: "Lighting" }
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
                        modal="Rehab"
                    ></ListView>
                    <ListView
                        title="Services"
                        itemList={servicesItemList}
                        modal="Service"
                    ></ListView>
                </div>
            </MainLayout>
        </>
    )
}