import React from 'react';
import styles from './Payment.module.scss';
import {useStore} from 'effector-react';
import {state$} from 'components/pages/order/model';
import {PayPalButton} from 'react-paypal-button-v2';
import {toast} from 'react-toastify';

const CLIENT_ID =
    process.env.NODE_ENV === 'production'
        ? 'ATQ1AlvYM7Hx7VFfm9vy7-Wp03tvueFbAZZY7R-SCqdrO3l8y8QY1ELaZOIg30huj21XjJVSDpcpAgJk'
        : 'AcrxDsC15y5Nv0ZXo2n9unadhWfOswrzlkObIn0P3KUKtmCm0brE0Stv_61Q7L6IVy0dmefdds5kDiVb';

export const Payment = () => {
    const {order} = useStore(state$);
    return (
        <div className={styles.container}>
            <div className={styles.title}>Payment due - ${order.price}</div>
            <div className={styles.paypal}>
                <PayPalButton
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: 'USD',
                                        value: order.price,
                                    },
                                    description: order._id,
                                },
                            ],
                            application_context: {
                                shipping_preference: 'NO_SHIPPING',
                            },
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            const order_id = details.purchase_units[0].description;
                            const pp_order_id = details.id;
                            toast.success(
                                'The payment was successful. The orders status will be updated within a few minutes.',
                                {autoClose: false},
                            );
                        });
                    }}
                    options={{
                        clientId: CLIENT_ID,
                    }}
                />
            </div>
        </div>
    );
};
