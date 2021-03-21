import React from 'react';
import styles from './Page.module.scss';
import {OrderForm} from './OrderForm';
import {RankBoostCalculator} from './Calculator';
import {Gate} from './model';

export const RankBoostCalc = () => {
    return (
        <div className={styles.pageContainer}>
            <Gate />
            <h1 className={styles.title}>Apex Legends Rank Boosting</h1>
            <section className={styles.orderContainer}>
                <RankBoostCalculator />
                <OrderForm />
            </section>
            <Features />
        </div>
    );
};

export const Features = () => (
    <section className={styles.features}>
        <h2 className={styles.title}>About us</h2>
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.heading}>Experience</p>
                <p className={styles.content}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Security</p>
                <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut beatae dolorem
                    esse obcaecati officiis perspiciatis possimus quo, ut vero?
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Support</p>
                <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste molestias nemo
                    obcaecati recusandae saepe unde.
                </p>
            </div>
        </div>
    </section>
);
