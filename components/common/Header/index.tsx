import styles from './Header.module.scss'
import Link from 'next/link'
import {ROUTE} from "../routes";

export default function Header () {
    return <header className={styles.header}>
        <div className={styles.logo}><h1>Apex Boosting</h1></div>
        <nav  className={styles.navigation}>
            <ul>
                <li>
                    <Link href={ROUTE.RANK_BOOST}><a>Rank boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.KILL_BOOST}><a>Kill boosting</a></Link>
                </li>
                <li>
                    <Link href={ROUTE.WINS_BOOST}><a>Win boosting</a></Link>
                </li>
            </ul>
        </nav>

    </header>
}