import React from 'react';
import styles from './Credentials.module.scss';
import {useStore} from 'effector-react';
import {setAccount, state$} from 'components/pages/order/model';
import {useForm} from 'react-hook-form';

export const Credentials = () => {
    const {order} = useStore(state$);
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        setAccount({_id: order._id, email: data.email, password: data.password});
    };
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Your game account</div>
            {order.details.credentials && (
                <p>
                    You have already provided your account details. Re-enter them if they have
                    changed.
                </p>
            )}
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <input required name="email" placeholder="email" ref={register} type="text" />
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
        </div>
    );
};
