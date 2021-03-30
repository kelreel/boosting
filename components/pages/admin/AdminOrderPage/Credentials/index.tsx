import React, {useEffect, useState} from 'react';
import styles from './Credentials.module.scss';
import {useStore} from 'effector-react';
import {state$} from 'components/pages/admin/AdminOrderPage/model';

export const AdminOrderCredentials = () => {
    const {order} = useStore(state$);
    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Game account</div>
            {order.details.credentials && (
                <button onClick={() => setShow(!show)} className={styles.button}>
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
            {order.details.credentials && show && (
                <div className={styles.account}>
                    <p>{order.details?.credentials?.email || order.details?.credentials?.login}</p>
                    <p>{order.details?.credentials?.password}</p>
                </div>
            )}
            {!order.details.credentials && (
                <div className={styles.message}>
                    <p>User has not yet provided an account</p>
                </div>
            )}
        </div>
    );
};
