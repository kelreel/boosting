import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.payments}>
                    <img src={"/svg/payment/paypal.svg"} style={{width: '115px'}} />
                    <img src={"/svg/payment/mc.svg"} style={{width: '70px'}} />
                    <img src={"/svg/payment/visa.svg"} style={{width: '90px'}} />
                </div>
                <div className={styles.disclaimer}>
                    This website is not endorsed or in any way affiliated with Activision Inc,
                    Electronic Arts Inc, Valve Corporation, Riot Games Inc, Respawn Entertainment,
                    Bungie, Psyonix Studios or Epic Games and does not reflect the views or opinions
                    of the aforementioned entities or anyone officially involved in producing or
                    managing Overwatch, Fortnite, Call of Duty Franchise, League of Legends,
                    Valorant, Destiny2, World of Warcraft, Rainbow Six Siege, Rocket League,
                    Teamfight Tactics, Dota 2 or Apex Legends. Overwatch, Fortnite, Call of Duty
                    Franchise, League of Legends, Valorant, Destiny2, World of Warcraft, Rainbow Six
                    Siege, Rocket League, Teamfight Tactics, Dota 2 or Apex Legends are trademarks
                    or registered trademarks of the aforementioned entities in the U.S. and/or other
                    countries. All submitted art content remains copyright of its original copyright
                    holder.
                </div>
                <h5>Mega-boosting.com</h5>
            </div>
        </footer>
    );
}
