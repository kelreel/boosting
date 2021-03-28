import React from 'react';
import styles from './Order.module.scss';
import {useStore} from 'effector-react';
import {OrderGate, state$} from 'components/pages/order/model';
import {OrderInfo} from 'components/pages/order/OrderInfo';
import {Payment} from 'components/pages/order/Payment';
import {Credentials} from "components/pages/order/Credentials";

export const OrderPage = ({id}: {id: string}) => {
    const state = useStore(state$);

    return (
        <div className={styles.container}>
            <OrderGate id={id} />
            <h3>Order: {id}</h3>

            {state.order && (
                <section className={styles.order}>
                    <div className={styles.left}>
                        <OrderInfo />
                    </div>
                    <div className={styles.right}>
                        <Payment />
                        <Credentials />
                    </div>
                </section>
            )}
        </div>
    );
};
