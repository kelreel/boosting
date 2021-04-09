import React, {useState} from 'react';
import styles from './UserCard.module.scss';
import {useStore} from 'effector-react';
import {state$} from '../model';
import SetPassword from 'components/pages/admin/UserProfile/UserCard/SetPassword';
import SetRole from './SetRole';
import {UserRole} from 'types/auth';
import {sessionUser$} from 'models/auth';

export const UserCard = () => {
    const {user} = useStore(state$);
    const session = useStore(sessionUser$);

    const formatDate = (d) => {
        let date = new Date(Date.parse(d));
        return date.toLocaleString();
    };

    return (
        <>
            {user ? (
                <div className={styles.container}>
                    <p>Role: {user?.role}</p>
                    {user.email && <p>E-Mail: {user?.email}</p>}
                    <p>ID: {user?._id}</p>
                    <p>Register date: {formatDate(user?.createdAt)}</p>
                    <div className={styles.actions}>
                        <SetPassword />
                        {(session?.role === UserRole.admin || session?.role === UserRole.manager) && (
                            <SetRole />
                        )}
                    </div>
                </div>
            ) : null}
        </>
    );
};
