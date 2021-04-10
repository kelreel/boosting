import React from 'react';
import styles from './Order.module.scss';
import {useStore} from 'effector-react';
import {OrderGate, state$} from 'components/pages/order/model';
import {OrderInfo} from 'components/pages/order/OrderInfo';
import {Payment} from 'components/pages/order/Payment';
import {Credentials} from 'components/pages/order/Credentials';
import {Chat} from './Chat';
import {OrderStatusEnum} from 'types/Apex';

export const OrderPage = ({id}: {id: string}) => {
    const state = useStore(state$);

    return (
        <div className={styles.container}>
            <OrderGate id={id} />
            <div className={styles.title}>
                <span>
                    Order: <span className={styles.id}>{id}</span>
                </span>
            </div>

            {state.order && (
                <section className={styles.order}>
                    <div className={styles.left}>
                        <OrderInfo />
                    </div>
                    <div className={styles.right}>
                        {state.order.status === OrderStatusEnum.CREATED && <Payment />}
                        <Credentials />
                        <Chat />
                    </div>
                </section>
            )}
        </div>
    );
};
