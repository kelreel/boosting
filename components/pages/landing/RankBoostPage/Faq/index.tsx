import styles from './Faq.module.scss';
import React from 'react';

export const Faq = () => (
    <section className={styles.faq}>
        <h2 className={styles.title}>FAQ</h2>
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.question}>1. Lorem ipsum dolor sit amet.</p>
                <p className={styles.answer}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis nihil
                    porro sequi. Asperiores at, autem cupiditate dicta fuga in incidunt molestias
                    mollitia nam omnis quibusdam, saepe temporibus, veritatis vitae.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className={styles.answer}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis nihil
                    porro sequi. Asperiores at, autem cupiditate dicta fuga in incidunt molestias
                    mollitia nam omnis quibusdam, saepe temporibus, veritatis vitae.
                </p>
            </div>
        </div>
    </section>
);
