import styles from './Header.module.scss'
import Link from 'next/link'
import { ROUTE } from 'core/routes'

export default function Header () {
    return <header className={styles.header}>
        <div className={styles.logo}>Apex Boosting</div>
        <nav  className={styles.navigation}>
            <ul>
                <li>
                    <Link href={ROUTE.RANK_BOOST}><a>Rank boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.KILL_BOOST}><a>Kill boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.ACHIEVEMENTS}><a>Achievements</a></Link>
                </li>
            </ul>
        </nav>

    </header>
}
