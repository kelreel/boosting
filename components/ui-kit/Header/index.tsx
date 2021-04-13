import styles from './Header.module.scss'
import Link from 'next/link'
import { ROUTE } from 'core/routes'

export default function Header () {
    return <header className={styles.header}>
        <div className={styles.logo}>
            <Link href={ROUTE.HOME}><a>Mega Boosting</a></Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href={ROUTE.RANK_BOOST}><a>Rank boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.KILLS_BOOST}><a>Kills boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.ACHIEVEMENTS}><a>Achievements</a></Link>
                </li>
            </ul>
        </nav>

    </header>
}
