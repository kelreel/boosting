import React from 'react';
import styles from './Page.module.scss';
import {OrderForm} from './OrderForm';
import {RankBoostCalculator} from './Calculator';
import {Gate} from './model';
import {Features} from '../blocks/Features';
import {ApexFaq} from '../blocks/Apex/ApexFaq';
import {ApexRankContent} from 'components/pages/landing/blocks/Apex/ApexRankContent';

export const RankBoost = () => {
    return (
        <div className={styles.pageContainer}>
            <Gate />
            <section className={styles.orderContainer}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Apex Legends Rank Boosting</h1>
                </div>
                <div className={styles.calculator}>
                    <RankBoostCalculator />
                    <OrderForm />
                </div>
            </section>
            <Features />
            <ApexRankContent />
            <ApexFaq />
        </div>
    );
};
