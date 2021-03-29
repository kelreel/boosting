import React, {useEffect, useRef} from 'react';
import styles from './Chat.module.scss';
import {useStore} from 'effector-react';
import {sendChatMessage, state$} from 'components/pages/order/model';
import {useForm} from 'react-hook-form';

export const Chat = () => {
    const state = useStore(state$);
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        sendChatMessage({id: state.order._id, message: data.message});
        reset();
    };

    const chatRef = useRef(null)
    const lastMsgRef = useRef(null)

    useEffect(() => {
        lastMsgRef.current.scrollIntoView({behavior: 'smooth'});
    },[state.messages])

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Chat</div>
            <div className={styles.chat} ref={chatRef}>
                {state.messages.map((msg, index) => {
                    if (msg.from === 'Customer') {
                        return (
                            <div key={index} className={styles.msgOut}>
                                <div className={styles.message}>
                                    {msg.message}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className={styles.msgIn}>
                                <div className={styles.message}>
                                    {msg.message}
                                </div>
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
