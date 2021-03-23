import styles from "./Features.module.scss";
import React from "react";

export const Features = () => (
    <section className={styles.features}>
        <h2 className={styles.title}>About us</h2>
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.heading}>Experience</p>
                <img alt="Experience" className={styles.img} src="/ranks/1.png" />
                <p className={styles.content}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Security</p>
                <img alt="Security" className={styles.img} src="/ranks/1.png" />
                <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut beatae dolorem
                    esse obcaecati officiis perspiciatis possimus quo, ut vero?
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>Support</p>
                <img alt="Support" className={styles.img} src="/ranks/1.png" />
                <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste molestias nemo
                    obcaecati recusandae saepe unde.
                </p>
            </div>
        </div>
    </section>
);
