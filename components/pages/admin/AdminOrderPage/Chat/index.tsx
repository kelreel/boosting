import React, {useEffect, useRef} from 'react';
import styles from './Chat.module.scss';
import {useStore} from 'effector-react';
import {
    state$,
    sendChatMessage,
    fetchAdminMessagesFx,
} from 'components/pages/admin/AdminOrderPage/model';
import {useForm} from 'react-hook-form';

export const AdminOrderChat = () => {
    const state = useStore(state$);
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        sendChatMessage({id: state.order._id, message: data.message});
        reset();
    };

    const chatRef = useRef(null)
    const lastMsgRef = useRef(null)
    const prevMsgLength = useRef<number>();

    useEffect(() => {
        if (prevMsgLength.current !== state.messages.length) {
            prevMsgLength.current = state.messages.length;
            lastMsgRef.current.scrollIntoView({behavior: 'smooth'});
        }
    },[state.messages])

    useEffect(() => {
        const interval = setInterval(() => {
            fetchAdminMessagesFx({id: state.order._id});
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Chat</div>
            <div className={styles.note}>
                <p>
                    Please write only on the topic of the order. Try to fit the information into one
                    message. For images, use links to third-party hosting sites.
                </p>
            </div>
            <div className={styles.chat} ref={chatRef}>
                {state.messages.map((msg, index) => {
                    if (msg.from !== 'Customer') {
                        return (
                            <div key={index} className={styles.msgOut}>
                                <div className={styles.from}>
                                    You, {new Date(msg.date).toLocaleTimeString()}
                                </div>
                                <div className={styles.message}>{msg.message}</div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className={styles.msgIn}>
                                <div className={styles.from}>
                                    Customer, {new Date(msg.date).toLocaleTimeString()}
                                </div>
                                <div className={styles.message}>{msg.message}</div>
                            </div>
                        );
                    }
                })}
                <div ref={lastMsgRef} />
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input required name="message" placeholder="Message" ref={register} type="text" />
                <button>Send</button>
            </form>
        </div>
    );
};
