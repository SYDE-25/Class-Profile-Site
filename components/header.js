import Link from 'next/link'

import styles from './header.module.scss'

export default function Header() {
    return(
        <div className={styles.header}>
            <Link href="/">
                <a>
                    <img className={styles.siteLogo} src="/sitelogo.svg"/>
                </a>
            </Link>
        </div>
    )   
}