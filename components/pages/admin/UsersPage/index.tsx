import React from 'react';
import styles from './Page.module.scss';
import UsersTable from "components/pages/admin/UsersPage/Table";

export default function AdminUsersPage() {
    return (
        <div className={styles.page}>
            <h2>All users</h2>
            <UsersTable />
        </div>
    );
}
