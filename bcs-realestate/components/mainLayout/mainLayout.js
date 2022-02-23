import Head from 'next/head'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import SchwartzBanner from '../../components/schwartzBanner/schwartzBanner'

export const links = [
    { name: "Home", link: "/" },
    //{ name: "Rehab", link: "/rehab" },
    { name: "Banks", link: "/banks" },
    { name: "Software", link: "/softwares" },
    { name: "Property Analysis", link: "/property-analysis" }
]

export const websiteTitle = "Bryan-College Station Real Estate";
export const pageTitle = "BCS Real Estate";

export default function MainLayout({ children }) {
    return (
        <>
            <NavBar websiteTitle={websiteTitle} links={links}></NavBar>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main>{children}</main>
            <SchwartzBanner> </SchwartzBanner>
            <Footer></Footer>
        </>
    )
}