import React from 'react';
import styles from './Order.module.scss';
import {useStore} from 'effector-react';
import {AdminOrderChat} from './Chat';
import {sessionUser$} from "models/auth";
import { AdminOrderInfo } from './OrderInfo';
import { AdminOrderPayment } from './Payment';
import {AdminOrderCredentials} from "components/pages/admin/AdminOrderPage/Credentials";
import { AdminOrderGate, state$ } from './model';

export const AdminOrderPage = ({id}: {id: string}) => {
    const state = useStore(state$);
    const user = useStore(sessionUser$);

    return (
        <div className={styles.container}>
            <AdminOrderGate id={id} />
            <div className={styles.title}>
                <span>
                    Order: <span className={styles.id}>{id}</span>
                </span>
                <p style={{color: '#ffa722'}}>You view this order as {user?.role} ({user?.login})</p>
            </div>

            {state.order && (
                <section className={styles.order}>
                    <div className={styles.left}>
                        <AdminOrderInfo />
                    </div>
                    <div className={styles.right}>
                        <AdminOrderPayment />
                        <AdminOrderCredentials />
                        <AdminOrderChat />
                    </div>
                </section>
            )}
        </div>
    );
};
