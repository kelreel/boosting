import React, {useState} from "react";
import styles from './UserCard.module.scss';
import {useStore} from "effector-react";
import { state$ } from "../model";
import SetPassword from "components/pages/admin/UserProfile/UserCard/SetPassword";


export const UserCard = () => {
    const {user} = useStore(state$)

    const formatDate = (d) => {
        let date = new Date(Date.parse(d));
        return date.toLocaleString()
    }

    if (!user) return null;

    return <div className={styles.container}>
        <p>E-Mail: {user?.email}</p>
        <p>Register date: {formatDate(user?.createdAt)}</p>
        <SetPassword />
    </div>
}
