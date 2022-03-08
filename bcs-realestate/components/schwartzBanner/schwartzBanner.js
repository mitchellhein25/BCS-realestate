import React from 'react'
import Image from 'next/image'
import Footer from '../footer/footer'
import schwartzBannerStyles from './schwartzBanner.module.css'
import useWindowSize from '../utils'

export const schwartzBannerText = "Powered by Greg Schwartz Realty and Precision Apartments"

export default function SchwartzBanner() {
    const [width, height] = useWindowSize();
    const breakpoint = 530;

    return (
        <div>
            <div className={schwartzBannerStyles.container}>
                { width >= breakpoint ?
                    <div className={schwartzBannerStyles.padding + ' ' + schwartzBannerStyles.vertCenter}>
                        <Image
                            src="/images/gregHeadshot.jpg"
                            alt="Greg Schwartz headshot"
                            width={150}
                            height={150}
                            className={schwartzBannerStyles.imageRounded}
                        />
                    </div> : null
                }
                <div className={schwartzBannerStyles.topContainer}>
                    <p className={schwartzBannerStyles.noMargin}>{schwartzBannerText}</p>
                    {width >= breakpoint ? null :
                        <div className={schwartzBannerStyles.mobileImagesRow}>
                            <div className={schwartzBannerStyles.mobileImage}>
                                <Image
                                    src="/images/gregHeadshot.jpg"
                                    alt="Greg Schwartz headshot"
                                    width={90}
                                    height={90}
                                    className={schwartzBannerStyles.imageRounded}
                                />
                            </div>
                            <div className={schwartzBannerStyles.mobileImage}>
                                <Image
                                    src="/images/precisionApartmentsLogo.jpg"
                                    alt="Precision Apartments logo"
                                    width={160}
                                    height={90}
                                    className={schwartzBannerStyles.imageRounded}
                                />
                            </div>
                        </div>
                    }
                    <Footer/>
                </div>
                {width >= breakpoint ?
                    <div className={schwartzBannerStyles.padding + ' ' + schwartzBannerStyles.vertCenter}>
                        <Image
                            src="/images/precisionApartmentsLogo.jpg"
                            alt="Precision Apartments logo"
                            width={222}
                            height={125}
                            className={schwartzBannerStyles.imageRounded}
                        />
                    </div> : null
                }
            </div>
        </div>
    )
}