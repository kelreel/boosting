import React from 'react';
import styles from './Page.module.scss';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page({children}) {
    return (
        <div className={styles.page}>
            <>
                {children} <ToastContainer />
            </>
        </div>
    );
}
