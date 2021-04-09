import React, {useState} from 'react';
import {Modal} from 'components/ui-kit/Modal';
import styles from './SetPassword.module.scss';
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';
import {changePasswordEvent, state$} from 'components/pages/admin/UserProfile/model';
import {useStore} from 'effector-react';

const SetPassword = () => {
    const [show, setShow] = useState(false);
    const {register, handleSubmit} = useForm();
    const state = useStore(state$);

    const onSubmit = (data) => {
        if (data.password !== data.password_repeat) {
            toast.error('Passwords not equals');
            return;
        }
        changePasswordEvent({login: state.user.login, password: data.password});
    };

    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={() => setShow(true)}>
                Set new password
            </button>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <h3 style={{textAlign: 'center'}}>New password</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <p>Password</p>
                        <input
                            required
                            id="password"
                            name="password"
                            ref={register}
                            type="password"
                        />
                    </div>
                    <div className={styles.field}>
                        <p>Repeat Password</p>
                        <input
                            required
                            id="password_repeat"
                            name="password_repeat"
                            ref={register}
                            type="password"
                        />
                    </div>
                    <button className={styles.button}>Set password</button>
                </form>
            </Modal>
        </div>
    );
};

export default SetPassword;
