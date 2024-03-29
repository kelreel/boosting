import React from 'react';
import styles from './Page.module.scss';
import OrdersTable from './Table';

export default function AdminOrdersPage() {
    return (
        <div className={styles.page}>
            <h2>All orders</h2>
            <OrdersTable />
        </div>
    );
}
