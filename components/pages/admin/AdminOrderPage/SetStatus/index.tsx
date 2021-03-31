import React from 'react';
import styles from './SetStatus.module.scss';
import {useStore} from 'effector-react';
import {setOrderStatusEvent, state$} from 'components/pages/admin/AdminOrderPage/model';
import {OrderStatusEnum} from 'types/Apex';
import {useForm} from 'react-hook-form';

const SetOrderStatus = () => {
    const {order} = useStore(state$);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            status: order.status,
        },
    });

    const onSubmit = (data) => {
        setOrderStatusEvent({id: order._id, status: data.status});
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.game}>Set status</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <select name="status" ref={register}>
                    {Object.values(OrderStatusEnum).map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button>Save</button>
            </form>
        </div>
    );
};

export default SetOrderStatus;
