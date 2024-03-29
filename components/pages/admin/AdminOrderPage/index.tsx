import React from 'react';
import styles from './Order.module.scss';
import {useStore} from 'effector-react';
import {AdminOrderChat} from './Chat';
import {sessionUser$} from 'models/auth';
import {AdminOrderInfo} from './OrderInfo';
import {AdminOrderPayment} from './Payment';
import {AdminOrderCredentials} from 'components/pages/admin/AdminOrderPage/Credentials';
import {AdminOrderGate, state$} from './model';
import SetOrderStatus from 'components/pages/admin/AdminOrderPage/SetStatus';
import SetOrderProgress from 'components/pages/admin/AdminOrderPage/SetProgress';
import {SetOrderBooster} from 'components/pages/admin/AdminOrderPage/SetBooster';
import {UserRole} from 'types/auth';

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
                <p style={{color: '#ffa722'}}>
                    You view this order as {user?.role} ({user?.login})
                </p>
            </div>

            {state.order && (
                <section className={styles.order}>
                    <div className={styles.left}>
                        <AdminOrderInfo />
                        <SetOrderStatus />
                        <SetOrderProgress />
                        {(user.role === UserRole.admin || user.role === UserRole.manager) && (
                            <SetOrderBooster />
                        )}
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
