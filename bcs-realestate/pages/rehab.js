import MainLayout from '../components/mainLayout/mainLayout'
import RehabListView from '../components/rehabListView/rehabListView'
import rehabStyles from '../styles/rehab.module.css'

export default function Rehab() {

    return (
        <>
            <MainLayout>
                <div className={rehabStyles.container}>
                    <RehabListView></RehabListView>
                </div>
            </MainLayout>
        </>
    )
}