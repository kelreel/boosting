import React, {useState} from 'react';
import {Modal} from 'components/ui-kit/Modal';
import styles from './SetRole.module.scss';
import {useForm} from 'react-hook-form';
import {changeRoleEvent, state$} from 'components/pages/admin/UserProfile/model';
import {useStore} from 'effector-react';
import {UserRole} from 'types/auth';

const SetRole = () => {
    const [show, setShow] = useState(false);
    const state = useStore(state$);

    const {register, handleSubmit} = useForm({
        defaultValues: {
            role: state.user.role,
        },
    });

    const onSubmit = (data) => {
        changeRoleEvent({login: state.user.login, role: data.role});
    };

    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={() => setShow(true)}>
                Change Role
            </button>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <h3 style={{textAlign: 'center'}}>Change role</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <select name="role" ref={register}>
                            {Object.values(UserRole).map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className={styles.button}>Save</button>
                </form>
            </Modal>
        </div>
    );
};

export default SetRole;
