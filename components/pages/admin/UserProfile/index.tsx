import React from "react";
import { UserProfileGate } from "./model";
import styles from './UserProfile.module.scss';
import {UserCard} from "components/pages/admin/UserProfile/UserCard";
import {UserOrdersTable} from "components/pages/admin/UserProfile/UserOrders";
import {useStore} from "effector-react";
import {state$} from './model'

export const UserProfile = ({login}: {login: string}) => {
    const {user} = useStore(state$);

    return <div className={styles.container}>
        <UserProfileGate login={login} />
        <div className={styles.heading}>
            <h2>{login}</h2>
        </div>
        <div className={styles.content}>
            <UserCard />
            {user && <UserOrdersTable id={user._id} />}
        </div>
    </div>
}
