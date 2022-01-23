import React from 'react'
import Image from 'next/image'
import schwartzBannerStyles from './schwartzBanner.module.css'

export const schwartzBannerText = "Powered by Greg Schwartz Realty and Precision Apartments"

export default function SchwartzBanner() {
    return (
        <div>
            <div className={schwartzBannerStyles.topContainer}>
                <p className={schwartzBannerStyles.noMargin}>{schwartzBannerText}</p>
            </div>
            <div className={schwartzBannerStyles.container}>
                <div className={schwartzBannerStyles.padding}>
                    <Image
                        src="/images/gregHeadshot.jpg"
                        alt="Greg Schwartz headshot"
                        width={150}
                        height={150}
                        className={schwartzBannerStyles.imageRounded}
                    />
                </div>
                <div className={schwartzBannerStyles.padding, schwartzBannerStyles.vertCenter}>
                    <Image
                        src="/images/precisionApartmentsLogo.jpg"
                        alt="Precision Apartments logo"
                        width={222}
                        height={125}
                        className={schwartzBannerStyles.imageRounded}
                    />
                </div>
            </div>
        </div>
    )
}