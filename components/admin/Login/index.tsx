import React from "react";
import { useForm } from "react-hook-form";
import {doLogin} from "../../../models/auth";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        doLogin({login: data.login, password: data.password});
    }

    return <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <p>Login</p>
                <input name="login" ref={register} type="text"/>
            </div>
            <div className="field">
                <p>Login</p>
                <input name="password" ref={register} type="text"/>
            </div>
            <button>Login</button>
        </form>
    </div>
}
