import React from 'react';
import styles from './Page.module.scss';
import OrdersTable from './Table';

export default function AdminApexRankOrderPage() {
    return (
        <div className={styles.page}>
            <h2>Apex Rank orders</h2>
            <OrdersTable />
        </div>
    );
}
