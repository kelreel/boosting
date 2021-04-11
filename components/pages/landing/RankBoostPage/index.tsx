import React from 'react';
import styles from './Page.module.scss';
import {OrderForm} from './OrderForm';
import {RankBoostCalculator} from './Calculator';
import {Gate} from './model';
import {Features} from './Features';
import {Faq} from '../blocks/Faq';

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
            <Faq />
        </div>
    );
};
