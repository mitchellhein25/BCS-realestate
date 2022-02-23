import { useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navBarStyles from './navBar.module.css'
import MobileMenu from '../mobileMenu/mobileMenu'
import useWindowSize from '../utils'

export default function NavBar({ websiteTitle, links }) {
    const [open, setOpen] = useState(true);
    const [width, height] = useWindowSize();
    const breakpoint = 600;

    return (
        <div className={navBarStyles.container}>
            <ul className={navBarStyles.list}>

                <li className={navBarStyles.li, navBarStyles.title}>
                    <Link href="/">
                        <div className={navBarStyles.logoSection}>
                            <Image
                                src="/icons/main-logo-home-icon.svg"
                                alt="Main logo icon"
                                width={50}
                                height={50}
                            />
                            <a className={navBarStyles.link}>{websiteTitle}</a>
                        </div>
                    </Link>
                </li>
                {/*<li className={navBarStyles.li, navBarStyles.title}>*/}
                {/*    <Link href="/">*/}
                        
                {/*    </Link>*/}
                {/*</li>*/}
                <div className={navBarStyles.navLinks}>
                    {width >= breakpoint ?
                                links.map((link) => (
                                    <li className={navBarStyles.li} key={link.name}>
                                        <Link href={link.link}>
                                            <a className={navBarStyles.link}>{link.name}</a>
                                        </Link>
                                    </li>
                                ))
                        :
                        <div>
                            {open ?
                                <div>
                                    <Image
                                        src="/icons/hamburger-menu.svg"
                                        alt="Mobile navigation menu button"
                                        width={40}
                                        height={40}
                                        onClick={() => setOpen(!open)}
                                        className={navBarStyles.transition}
                                    />
                                </div>
                                :
                                <div>
                                    <Image
                                        src="/icons/exit.svg"
                                        alt="Exit navigation menu button"
                                        width={30}
                                        height={30}
                                        onClick={() => setOpen(!open)}
                                        className={navBarStyles.transition}
                                    />
                                    <MobileMenu websiteTitle={websiteTitle} links={links}></MobileMenu>
                                </div>
                                }
                        </div>
                    }
                </div>
            </ul>
        </div>
    )
}