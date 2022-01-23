import Link from 'next/link'
import mobileMenuStyles from './mobileMenu.module.css'

export default function MobileMenu({ websiteTitle, links }) {

    return (
        <div className={mobileMenuStyles.container}>
            <ul className={mobileMenuStyles.list}>
                <div className={mobileMenuStyles.navLinks}>
                    {
                        links.map((link) => (
                            <li className={mobileMenuStyles.li} key={link.name}>
                                <Link href={link.link}>
                                    <a className={mobileMenuStyles.link}>{link.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
    )
}