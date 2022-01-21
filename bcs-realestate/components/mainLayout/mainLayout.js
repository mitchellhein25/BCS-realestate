import Head from 'next/head'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'

export const pageTitle = "BCS Real Estate"

export default function MainLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}