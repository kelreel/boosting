import React from "react";
import styles from './Payment.module.scss';
import {useStore} from 'effector-react';
import {state$} from 'components/pages/admin/AdminOrderPage/model';

export const AdminOrderPayment = () => {
    const {order} = useStore(state$);
    return <div className={styles.container}>Payment</div>
}
