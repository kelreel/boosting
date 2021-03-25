import React from 'react';
import styles from './OrderForm.module.scss';
import {useStore} from 'effector-react';
import {rankStore$} from '../model';
import {getDevisionString} from '../utils';

export const OrderForm = () => {
    const state = useStore(rankStore$);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h4 className={styles.orderLabel}>You order</h4>
                <p className={styles.orderType}>Rank Boosting ({state.platform})</p>
                <p className={styles.rankValue}>
                    ({getDevisionString(state.from)}) <strong>{state.from} - {state.to}</strong>  {" "}
                    ({getDevisionString(state.to)})
                </p>
            </div>
            <div className={styles.total}>
                <h4 data-cy="price-p">${state.price} USD</h4>
                <button className={styles.checkoutBtn}>Checkout</button>
            </div>
        </div>
    );
};
