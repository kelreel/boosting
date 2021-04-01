import React from 'react';
import styles from './SetStatus.module.scss';
import {useStore} from 'effector-react';
import {
    setBoosterEvent,
    SetBoosterGate,
    setOrderStatusEvent,
    state$,
} from 'components/pages/admin/AdminOrderPage/model';
import {OrderStatusEnum} from 'types/Apex';
import {useForm} from 'react-hook-form';

export const SetOrderBooster = () => {
    const {order, boosters} = useStore(state$);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            status: boosters.find((val) => val._id === order.booster_id)?.login,
        },
    });

    const onSubmit = (data) => {
        setBoosterEvent({id: order._id, booster_id: data.booster_id});
    };

    return (
        <div className={styles.container}>
            <SetBoosterGate id={order._id} />
            <div className={styles.heading}>
                <p className={styles.game}>Set booster</p>
            </div>
            <div className={styles.current}>
                <p>
                    Current booster:{' '}
                    <strong>
                        {' '}
                        {order.booster_id
                            ? boosters.find((val) => val._id === order.booster_id)?.login
                            : 'Not set'}
                    </strong>
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <select name="booster_id" ref={register}>
                    {boosters &&
                        boosters.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.login}
                            </option>
                        ))}
                </select>
                <button>Save</button>
            </form>
        </div>
    );
};
