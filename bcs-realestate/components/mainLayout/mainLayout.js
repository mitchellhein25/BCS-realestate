import Head from 'next/head'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import SchwartzBanner from '../../components/schwartzBanner/schwartzBanner'
import SimpleBanner from '../simpleBanner/simpleBanner'

export const links = [
    //{ name: 'Home', link: '/' },
    //{ name: 'Rehab', link: '/rehab' },
    { name: 'Property Analysis', link: '/property-analysis' },
    { name: 'Banks', link: '/banks' },
    { name: 'Software', link: '/softwares' },
]

export const websiteTitle = 'Bryan-College Station Real Estate';
export const pageTitle = 'BCS Real Estate';

export const bannerTitle1 = 'Everything you need to invest in BCS real estate!';

export default function MainLayout({ children }) {
    return (
        <>
            {/*<SimpleBanner bannerTitle={bannerTitle1}></SimpleBanner>*/}
            <NavBar websiteTitle={websiteTitle} links={links}></NavBar>
            <Head>
                <title>{pageTitle}</title>
                <link rel="shortcut icon" href="/icons/favicon.svg" />
            </Head>
            <main>{children}</main>
            <SchwartzBanner> </SchwartzBanner>
            {/*<Footer></Footer>*/}
        </>
    )
}