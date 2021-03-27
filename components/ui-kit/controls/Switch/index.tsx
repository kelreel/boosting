import React from "react";
import styles from './Switch.module.scss'

export const Switch = ({checked, onChange}: {checked: boolean, onChange: (boolean) => void;}) => {
    return (<label className={styles.switch}>
        <input checked={checked} onChange={(e) => {
            onChange(e.target.checked)
        }} type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`} />
    </label>)
}
