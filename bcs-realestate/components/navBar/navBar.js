import React from 'react'
import Link from 'next/link'
import navBarStyles from './navBar.module.css'

export const websiteTitle = "Bryan-College Station Real Estate"

export default function NavBar() {
    return (
        <div className={navBarStyles.container}>
            <ul className={navBarStyles.list}>

                <li className={navBarStyles.li, navBarStyles.title}>
                    <Link href="/">
                        <a className={navBarStyles.link}>{websiteTitle}</a>
                    </Link>
                </li>

                <div className={navBarStyles.navLinks}>
                    <li className={navBarStyles.li}>
                        <Link href="/">
                            <a className={navBarStyles.link}>Home</a>
                        </Link>
                    </li>
                    <li className={navBarStyles.li}>
                        <Link href="/rehab">
                            <a className={navBarStyles.link} >Rehab</a>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}