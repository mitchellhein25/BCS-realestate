import Image from 'next/image'
import MainLayout from "../components/mainLayout/mainLayout"
import PrimaryButton from "../components/primaryButton/primaryButton"
import homeStyles from "../styles/Home.module.css"

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className={homeStyles.mainContainer}>
                    <div className={homeStyles.column}>
                        <PrimaryButton
                            buttonText="Rehab Resources"
                            buttonImagePath="/icons/toolbox-white.svg"
                            path="/rehab"
                            buttonAltText="Rehab resources navigation button">
                        </PrimaryButton>
                    </div>
                    <div className={homeStyles.column}>
                        <Image
                            src="/images/bryan college-station map 1.82 .55.png"
                            alt="Map of Bryan/College Station"
                            height={546}
                            width={300}
                        ></Image>
                    </div>
                    <div className={homeStyles.column}>
                        <PrimaryButton
                            buttonText="Find a Bank"
                            buttonImagePath=""
                            path=""
                            buttonAltText="">
                        </PrimaryButton>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}