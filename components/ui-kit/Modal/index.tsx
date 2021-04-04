import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.scss'

interface Props {
    isOpen: boolean;
    children: ReactNode;
    onClose?: Function;
}

ReactModal.defaultStyles.overlay.backgroundColor = `rgba(0,0,0,0.4)`;

export function Modal(props: Props) {
    const {children, isOpen, onClose} = props;
    return (
        <ReactModal className={styles.root} isOpen={isOpen} onRequestClose={onClose}>
            <div className={styles.container}>
                {children}
            </div>
        </ReactModal>
    );
}
