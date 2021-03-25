import React from 'react';
import styles from './Section.module.scss';

export const Section = ({children}) => {
    return <section className={styles.section}>{children}</section>;
};
