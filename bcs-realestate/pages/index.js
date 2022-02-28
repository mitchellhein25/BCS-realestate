import MainLayout from '../components/mainLayout/mainLayout'
import PrimaryButton from '../components/primaryButton/primaryButton'
import homeStyles from '../styles/Home.module.css'
import useWindowSize from '../components/utils'
import SimpleBanner from '../components/simpleBanner/simpleBanner'

export default function Home() {
    const [width, height] = useWindowSize();
    const breakpoint = 600;
    const bannerTitle1 = 'Everything you need to invest in BCS real estate!';

    return (
        <MainLayout>
            <SimpleBanner bannerTitle={bannerTitle1}></SimpleBanner>
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
                    <a href='https://www.google.com/maps/place/30.634364,-96.342782/'>
                        {width <= breakpoint ?
                            <img
                                src='https://maps.googleapis.com/maps/api/staticmap?center=30.634364,-96.342782&zoom=11&scale=1&size=300x300&maptype=roadmap&key=AIzaSyD7w_H5zEpuDjT3XhCTiiMvBhKOq5zGJhU&format=png&visual_refresh=true'
                                alt='Google Map of Bryan-College Station, TX'
                            /> :
                            <img
                                src='https://maps.googleapis.com/maps/api/staticmap?center=30.634364,-96.342782&zoom=12&scale=1&size=600x600&maptype=roadmap&key=AIzaSyD7w_H5zEpuDjT3XhCTiiMvBhKOq5zGJhU&format=png&visual_refresh=true'
                                alt='Google Map of Bryan-College Station, TX'
                            />}
                    </a>
                </div>
            </div>
        </MainLayout>
    )
}