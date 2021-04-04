import React, {useState} from "react";
import styles from './UserCard.module.scss';
import {useStore} from "effector-react";
import { state$ } from "../model";
import { Modal } from "components/ui-kit/Modal";

export const UserCard = () => {
    const {user} = useStore(state$)
    const [show, setShow] = useState(false);

    const formatDate = (d) => {
        let date = new Date(Date.parse(d));
        return date.toLocaleString()
    }

    if (!user) return null;

    return <div className={styles.container}>
        <p>E-Mail: {user?.email}</p>
        <p>Register date: {formatDate(user?.createdAt)}</p>
        <Modal isOpen={show} onClose={() => setShow(false)}>
            <p>Content</p>
            <p>Content 2</p>
        </Modal>
    </div>
}
