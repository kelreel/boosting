import React from 'react';
import styles from './OrderForm.module.scss';
import {useStore} from 'effector-react';
import {createOrder, emailChanged, killsStore$, streamingChanged} from '../model';
import isEmail from 'validator/lib/isEmail';
import {Switch} from "components/ui-kit/controls/Switch";

export const OrderForm = () => {
    const state = useStore(killsStore$);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h4 className={styles.orderLabel}>You order</h4>
                <p className={styles.orderType} data-cy="order-type">
                    Kills boosting ({state.platform})
                </p>
                <p className={styles.rankValue}>
                    <strong>
                        {state.killsCount} Kills
                    </strong>{' '}
                </p>
                <div className={styles.streaming}>
                    <p>Streaming (+12%)</p>
                    <Switch onChange={(val) => streamingChanged(val)} checked={state.streaming} />
                </div>
            </div>
            <form className={styles.total} onSubmit={(e) => {
                e.preventDefault();
                if (!state.pending) {
                    createOrder();
                }
            }}>
                <input
                    onChange={(e) => emailChanged(e.target.value)}
                    className={styles.email}
                    type="email"
                    placeholder="your-email@mail.com"
                    data-cy="email-input"
                    required
                />
                <h4 data-cy="price">${state.price} USD</h4>
                <button
                    data-cy="checkout_btn"
                    className={styles.checkoutBtn}
                >
                    Checkout
                </button>
            </form>
        </div>
    );
};
