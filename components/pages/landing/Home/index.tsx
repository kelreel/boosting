import React from 'react';
import styles from './Home.module.scss';
import {Features} from 'components/pages/landing/blocks/Features';
import Link from 'next/link';
import {ROUTE} from 'core/routes';

export const Home = () => {
    return (
        <>
            <section className={styles.intro}>
                <div className={styles.heading}>
                    <h2>Professional Boosting Service</h2>
                    <h3>Boosting game accounts on PC, XBbox and PlayStation.</h3>
                </div>
            </section>
            <section className={styles.games}>
                <div className={`${styles.gameCard} ${styles.inactive}`}>
                    <h3>Valorant</h3>
                    <p className={styles.coming}>Coming soon!</p>
                    <a>Rank Boost</a>
                    <a>Placement matches</a>
                    <a>Unrated games</a>
                </div>
                <div className={styles.gameCard}>
                    <h3>Apex Legends</h3>
                    <Link href={ROUTE.RANK_BOOST}>
                        <a>Rank Boost</a>
                    </Link>
                    <Link href={ROUTE.ACHIEVEMENTS}>
                        <a>Achievements & Badges</a>
                    </Link>
                    <Link href={ROUTE.KILLS_BOOST}>
                        <a>Kills Boost</a>
                    </Link>
                </div>
                <div className={`${styles.gameCard} ${styles.inactive}`}>
                    <h3>CoD Cold War</h3>
                    <p className={styles.coming}>Coming soon!</p>
                    <a>Leveling Boosting</a>
                    <a>KD Boost</a>
                    <a>Weapon Leveling</a>
                    <a>Unlocks</a>
                </div>
            </section>
            <Features />
            <section className={styles.container}>
                <p>
                    Our company is created for everyone who plays online games and want to pump
                    their ratings, learn something new, increase MMR, get any achievements, any
                    items in games such as: Apex Legends, Dota 2, Valorant, WoW, Destiny 2 and
                    others. We are also adding new games and improving services so that players can
                    fully enjoy the gameplay without spending a lot of money.
                </p>
                <p>
                    Our main priority is ultra-fast fulfillment of any services you wish. At the
                    moment our company has 100 permanent who take all, even the most unusual,
                    orders. Our partners and staff are top players from all over the world, known
                    for their participation in championships, leagues and long-time members of
                    gaming communities.
                </p>
            </section>
        </>
    );
};
