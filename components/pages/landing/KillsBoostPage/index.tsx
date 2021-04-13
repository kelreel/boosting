import React from 'react';
import styles from './Page.module.scss';
import {Features} from '../blocks/Features';
import {ApexFaq} from '../blocks/Apex/ApexFaq';
import {ApexKillsContent} from '../blocks/Apex/ApexKillsContent';
import {KillsBoostCalculator} from 'components/pages/landing/KillsBoostPage/Calculator';
import {Gate} from './model';
import {OrderForm} from './OrderForm';

export const KillsBoost = () => {
    return (
        <div className={styles.pageContainer}>
            <Gate />
            <section className={styles.orderContainer}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Apex Legends Kills Boost</h1>
                </div>
                <div className={styles.calculator}>
                    <KillsBoostCalculator />
                    <OrderForm />
                </div>
            </section>
            <Features />
            <ApexKillsContent />
            <ApexFaq />
        </div>
    );
};
