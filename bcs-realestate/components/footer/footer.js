import React from 'react'
import Image from 'next/image'
import footerStyles from './footer.module.css'

export const bpLink = "https://biggerpockets.com/users/gregschwartz"
export const precisionApartmentsLink = "http://precisionapartments.managebuilding.com/"


export default function Footer() {
    return (
        <div className={footerStyles.container}>
            <div className={footerStyles.topRow}>
                <li className={footerStyles.li}>
                    <a className={footerStyles.link}>
                        <Image
                            src="/icons/instagram.svg"
                            alt="Instagram icon"
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
                <li className={footerStyles.li}>
                    <a className={footerStyles.link}>
                        <Image
                            src="/icons/email.svg"
                            alt="Email icon"
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
                <li className={footerStyles.li}>
                    <a className={footerStyles.link}>
                        <Image
                            src="/icons/facebook.svg"
                            alt="Facebook icon"
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
            </div>
            <div>
                <a href={bpLink} className={footerStyles.link}>{bpLink}</a>
                <a href={precisionApartmentsLink} className={footerStyles.link}>{precisionApartmentsLink}</a>
            </div>
        </div>
    )
}