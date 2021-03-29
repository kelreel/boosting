import React, {useEffect, useState} from 'react';
import styles from './Credentials.module.scss';
import {useStore} from 'effector-react';
import {setAccount, state$} from 'components/pages/order/model';
import {useForm} from 'react-hook-form';

export const AdminOrderCredentials = () => {
    const {order} = useStore(state$);
    const {register, handleSubmit} = useForm();
    const [show, setShow] = useState(false);
    const onSubmit = (data) => {
        setAccount({id: order._id, email: data.email, password: data.password});
    };

    useEffect(() => {
        if (!order.details.credentials) {
            setShow(true);
        }
    }, [order]);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Your game account</div>
            {order.details.credentials && !show && (
                <div className={styles.message}>
                    <p>
                        You have already provided your account details. Re-enter them if they have
                        changed. It is recommended to change your password after completing the order.
                    </p>
                    <button onClick={() => setShow(true)}>Enter again</button>
                </div>
            )}
            {show && (
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <input
                            required
                            name="email"
                            placeholder="email"
                            ref={register}
                            type="text"
                        />
                    </div>
                    <div className="field">
                        <input
                            required
                            name="password"
                            placeholder="password"
                            ref={register}
                            type="text"
                        />
                    </div>
                    <button>Save</button>
                </form>
            )}
        </div>
    );
};
