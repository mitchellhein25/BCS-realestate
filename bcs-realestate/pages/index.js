import MainLayout from '../components/mainLayout/mainLayout'
import PrimaryButton from '../components/primaryButton/primaryButton'
import homeStyles from '../styles/Home.module.css'
import useWindowSize from '../components/utils'
import SimpleBanner from '../components/simpleBanner/simpleBanner'
import PageHeader from '../components/pageHeader/pageHeader'
import NewsletterSignup from '../components/newsletterSignUp/newsletterSignUp'

export default function Home() {
    const [width, height] = useWindowSize();
    const breakpoint = 600;
    const header = 'Bryan-College Station Real Estate Investing'
    const subHeader = `This is the place to go for all things real estate in Bryan and College Station! Rather than searching all over 
the web for the tools and resources you need to invest in real estate in the area, we have curated this site to include everything you need. From local
banks to helpful softwares to a property analysis calculator, look no further for your real estate investor needs. We have much more to come as well,
including neighborhood data tools, property rehab resources, and more!`
    return (
        <MainLayout>
            <div className={homeStyles.headerContainer}>
                <PageHeader
                    header={header}
                    subHeader={subHeader}
                />
            </div>
            <div className={homeStyles.mainContainer}>
                <div>
                    {/*<PrimaryButton*/}
                    {/*    buttonText='Rehab Resources'*/}
                    {/*    buttonImagePath='/icons/toolbox-white.svg'*/}
                    {/*    path='/rehab'*/}
                    {/*    buttonAltText='Rehab resources navigation button'>*/}
                    {/*</PrimaryButton>*/}
                </div>
                <div>
                    <PrimaryButton
                        buttonText='Run a Property Analysis'
                        buttonImagePath='/icons/two-story-house.svg'
                        path='/property-analysis'
                        buttonAltText='Property analysis navigation button'>
                    </PrimaryButton>
                </div>
                <div>
                    <PrimaryButton
                        buttonText='Find a Bank'
                        buttonImagePath='/icons/bank.svg'
                        path='/banks'
                        buttonAltText='Banks navigation button'>
                    </PrimaryButton>
                </div>
                <div>
                    <PrimaryButton
                        buttonText='Find a Software'
                        buttonImagePath='/icons/software.svg'
                        path='/softwares'
                        buttonAltText='Software navigation button'>
                    </PrimaryButton>
                </div>
                <div>
                    <NewsletterSignup />
                </div>
                {/*<div>*/}
                {/*    <a href='https://www.google.com/maps/place/30.634364,-96.342782/'>*/}
                {/*        {width <= breakpoint ?*/}
                {/*            <img*/}
                {/*                src='https://maps.googleapis.com/maps/api/staticmap?center=30.634364,-96.342782&zoom=11&scale=1&size=300x300&maptype=roadmap&key=AIzaSyD7w_H5zEpuDjT3XhCTiiMvBhKOq5zGJhU&format=png&visual_refresh=true'*/}
                {/*                alt='Google Map of Bryan-College Station, TX'*/}
                {/*            /> :*/}
                {/*            <img*/}
                {/*                src='https://maps.googleapis.com/maps/api/staticmap?center=30.634364,-96.342782&zoom=12&scale=1&size=600x600&maptype=roadmap&key=AIzaSyD7w_H5zEpuDjT3XhCTiiMvBhKOq5zGJhU&format=png&visual_refresh=true'*/}
                {/*                alt='Google Map of Bryan-College Station, TX'*/}
                {/*            />}*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </MainLayout>
    )
}