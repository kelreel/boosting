import React from 'react';
import {useForm} from 'react-hook-form';
import {doRegister, isAuth$} from 'models/auth';
import styles from './Register.module.scss';
import {useRouter} from 'next/router';
import {useStore} from 'effector-react';
import {ADMIN_ROUTE} from 'core/routes';
import {toast} from "react-toastify";

export const Register = () => {
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const auth = useStore(isAuth$);
    if (auth) {
        router.push(ADMIN_ROUTE.ORDERS);
    }
    const onSubmit = (data) => {
        if (data.password !== data.password_repeat) {
            toast.error('Passwords not equals')
            return
        }
        doRegister({login: data.login, password: data.password, email: data.email});
    };

    return (
        <div className={styles.container}>
            <h2>Sign up</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                    <p>Login</p>
                    <input
                        required
                        name="login"
                        id="login"
                        ref={register}
                        type="text"
                        placeholder="Stella14"
                    />
                </div>
                <div className={styles.field}>
                    <p>Email</p>
                    <input
                        required
                        id="email"
                        name="email"
                        ref={register}
                        type="email"
                        placeholder="Stella14@gmail.com"
                    />
                </div>
                <div className={styles.field}>
                    <p>Password</p>
                    <input required id="password" name="password" ref={register} type="password" />
                </div>
                <div className={styles.field}>
                    <p>Repeat Password</p>
                    <input
                        required
                        id="password_repeat"
                        name="password_repeat"
                        ref={register}
                        type="password"
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};
