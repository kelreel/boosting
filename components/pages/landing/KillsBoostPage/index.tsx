import React from 'react';
import styles from './Page.module.scss';
import {Features} from '../blocks/Features';
import {ApexFaq} from '../blocks/Apex/ApexFaq';
import { ApexKillsContent } from '../blocks/Apex/ApexKillsContent';
import {KillsBoostCalculator} from "components/pages/landing/KillsBoostPage/Calculator";
import { Gate } from './model';
import { OrderForm } from './OrderForm';

export const KillsBoost = () => {
    return (
        <div className={styles.pageContainer}>
            <Gate />
            <h1 className={styles.title}>Apex Legends Kills Boosting</h1>
            <section className={styles.orderContainer}>
                <KillsBoostCalculator />
                <OrderForm />
            </section>
            <Features />
            <ApexKillsContent />
            <ApexFaq />
        </div>
    );
};
