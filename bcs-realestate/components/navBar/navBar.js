import React from 'react'
import Link from 'next/link'
import navBarStyles from './navBar.module.css'

export default function NavBar({ websiteTitle, links }) {
    return (
        <div className={navBarStyles.container}>
            <ul className={navBarStyles.list}>

                <li className={navBarStyles.li, navBarStyles.title}>
                    <Link href="/">
                        <a className={navBarStyles.link}>{websiteTitle}</a>
                    </Link>
                </li>

                <div className={navBarStyles.navLinks}>
                    {
                        links.map((link) => (
                            <li className={navBarStyles.li}>
                                <Link href={link.link}>
                                    <a className={navBarStyles.link}>{link.name}</a>
                                </Link>
                            </li>
                    ))}
                </div>
            </ul>
        </div>
    )
}