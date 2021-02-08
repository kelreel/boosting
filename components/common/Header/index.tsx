import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header () {
    return <header className={styles.header}>
        <div className={styles.logo}><h1>Apex Boosting</h1></div>
        <nav  className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/rank-boosting"><a>Rank boosting</a></Link>
                </li>
                <li>
                    <Link href="/kill-boosting"><a>Kill boosting</a></Link>
                </li>
                <li>
                    <Link href="/win-boosting"><a>Win boosting</a></Link>
                </li>
            </ul>
        </nav>

    </header>
}