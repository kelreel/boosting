import React from 'react';
import styles from './OrderForm.module.scss';
import {useStore} from 'effector-react';
import {createOrder, createOrderFx, emailChanged, rankStore$, streamingChanged} from '../model';
import {getDevisionString} from '../utils';
import isEmail from 'validator/lib/isEmail';
import {Switch} from "components/ui-kit/controls/Switch";

export const OrderForm = () => {
    const state = useStore(rankStore$);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h4 className={styles.orderLabel}>You order</h4>
                <p className={styles.orderType} data-cy="order-type">
                    Rank Boosting ({state.platform})
                </p>
                <p className={styles.rankValue}>
                    ({getDevisionString(state.from)}){' '}
                    <strong>
                        {state.from} - {state.to}
                    </strong>{' '}
                    ({getDevisionString(state.to)})
                </p>
                <div className={styles.streaming}>
                    <p>Streaming (+12%)</p>
                    <Switch onChange={(val) => streamingChanged(val)} checked={state.streaming} />
                </div>
            </div>
            <div className={styles.total}>
                <input
                    onChange={(e) => emailChanged(e.target.value)}
                    className={styles.email}
                    type="email"
                    placeholder="your-email@mail.com"
                    data-cy="email-input"
                />
                <h4 data-cy="price">${state.price} USD</h4>
                <button
                    data-cy="checkout_btn"
                    disabled={!isEmail(state.email) || state.price === 0}
                    className={styles.checkoutBtn}
                    onClick={() => createOrder()}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};
