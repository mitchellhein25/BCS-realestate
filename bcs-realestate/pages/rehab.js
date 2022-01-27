import MainLayout from '../components/mainLayout/mainLayout'
import RehabListView from '../components/rehabListView/rehabListView'
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
                    <RehabListView
                        title="Rehab Materials"
                        itemList={rehabItemList}
                        modal="Rehab"
                    ></RehabListView>
                    <RehabListView
                        title="Services"
                        itemList={servicesItemList}
                        modal="Service"
                    ></RehabListView>
                </div>
            </MainLayout>
        </>
    )
}