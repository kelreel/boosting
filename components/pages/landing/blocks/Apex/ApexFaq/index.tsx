import styles from './Faq.module.scss';
import React from 'react';

export const ApexFaq = () => (
    <section className={styles.faq}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.question}>1. Why us?</p>
                <p className={styles.answer}>
                    Our service was made by a team with great experience in promoting services. Our
                    employees are ready to spend their free time playing computer games with maximum
                    efficiency.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>2. Are your boosters any good?</p>
                <p className={styles.answer}>
                    All boosters are carefully selected and tested. All of them have a high Apex
                    Legends rank, as well as astounding stats in the game, especially the
                    mesmerizing odds of winning.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>3. Will my account be safe?</p>
                <p className={styles.answer}>
                    We promise 100% security. All boosters are trained to keep our customers'
                    accounts safe. They don't do any manipulation of your account, they just do
                    their job.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>4. How long will my order last?</p>
                <p className={styles.answer}>
                    As a rule, orders are fulfilled in no more than 1-2 days. It is important to
                    remember that the larger the order, the longer it will take to complete.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>5. The order is paid for. What happens next?</p>
                <p className={styles.answer}>
                    As soon as you pay for your order, you are redirected back to our site. On this
                    page, you need to specify all the information you need to start working on your
                    order.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>
                    6. Can the booster play only as certain characters?
                </p>
                <p className={styles.answer}>
                    Yes, of course! We understand the desire to pump statistics for a certain
                    character. You can indicate which heroes you want your booster to play when you
                    place an order. We always take into consideration all our customers' wishes.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>7. Can I change Booster?</p>
                <p className={styles.answer}>
                    If you have any problems with your booster, please contact our support team
                    right away. We will find another specialist for you and see how else we can
                    help.
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.question}>
                    8. Can I see how the booster plays from my account?
                </p>
                <p className={styles.answer}>
                    Sure! Thanks to a special option for those who want to monitor the performance
                    of your order. Remember to select the appropriate option when placing your order
                    so that your booster can set up a private stream just for you.
                </p>
            </div>
        </div>
    </section>
);
