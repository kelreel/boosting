import styles from './Features.module.scss';
import React from 'react';

export const Features = () => (
    <section className={styles.features}>
        <h2 className={styles.title}>About out boosting service</h2>
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.heading}>Experience</p>
                <img alt="Experience" className={styles.img} src="/svg/stars.svg" />
                <p className={styles.content}>
                    We are rapidly growing in the boosting market for 1.5 years and have completed
                    more than 1,000 orders. Let's just say that 99% of our customers are happy.
                    You'll be able to communicate with your assigned booster, monitor your booster's
                    progress, see the remaining time to complete and deliver, check the work in case
                    of a live order, and more.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Security</p>
                <img alt="Security" className={styles.img} src="/svg/shield.svg" />
                <p className={styles.content}>
                    Our boosters will use a VPN service when logging into your account. This means
                    they can mimic your IP address, which will protect you from being banned. You
                    don't have to worry about your account information being sold or used outside of
                    our services. No information you provide to us will be shared
                    with any other parties.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Support</p>
                <img alt="Support" className={styles.img} src="/svg/support.svg" />
                <p className={styles.content}>
                    Our agents are trained before they are officially hired, and during this
                    training period, they learn exactly how to satisfy a customer and solve every
                    problem they may encounter. At any time, if you need help with anything, feel
                    free to contact us through our live support chat.
                </p>
            </div>
        </div>
    </section>
);
