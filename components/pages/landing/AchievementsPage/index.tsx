import React from 'react';
import styles from './Page.module.scss';
import {Features} from '../blocks/Features';
import {ApexFaq} from '../blocks/Apex/ApexFaq';
import {Gate} from './model';
import {OrderForm} from './OrderForm';
import {BadgesCalculator} from "components/pages/landing/AchievementsPage/Calculator";
import {ApexBadgesContent} from "components/pages/landing/blocks/Apex/ApexBadgesContent";

export const AchievementsBoost = () => {
    return (
        <div className={styles.pageContainer}>
            <Gate />
            <section className={styles.orderContainer}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Apex Legends Achievements & Badges Boost</h1>
                </div>
                <div className={styles.calculator}>
                    <BadgesCalculator />
                    <OrderForm />
                </div>
            </section>
            <Features />
            <ApexBadgesContent />
            <ApexFaq />
        </div>
    );
};
