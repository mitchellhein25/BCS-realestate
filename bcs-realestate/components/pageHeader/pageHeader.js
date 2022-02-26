import HeaderDivider from '../headerDivider/headerDivider'
import pageHeaderStyles from './pageHeader.module.css'

export default function PageHeader(props) {

    return (
        <>
            <h1 className={pageHeaderStyles.mainHeader}>{props.header}</h1>
            <HeaderDivider />
            <p className={pageHeaderStyles.subheader}>{props.subHeader}</p>
        </>
        )
}