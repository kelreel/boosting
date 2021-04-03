import React from "react";
import { useForm } from "react-hook-form";
import {doLogin, isAuth$} from "models/auth";
import styles from './Login.module.scss';
import {useRouter} from 'next/router';
import {useStore} from "effector-react";
import {ADMIN_ROUTE} from "core/routes";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter()
    const auth = useStore(isAuth$);
    if (auth) {
        router.push(ADMIN_ROUTE.ORDERS);
    }
    const onSubmit = (data) => {
        doLogin({login: data.login, password: data.password});
    }

    return <div className={styles.container}>
        <h2>Sign in</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
                <p>Login</p>
                <input required name="login" placeholder="mega_booster" ref={register} type="text"/>
            </div>
            <div className={styles.field}>
                <p>Password</p>
                <input required name="password" placeholder="password" ref={register} type="password"/>
            </div>
            <button>Login</button>
        </form>
    </div>
}
