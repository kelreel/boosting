import React from 'react';
import styles from './SetProgress.module.scss';
import {useStore} from 'effector-react';
import {setOrderProgressEvent, setOrderStatusEvent, state$} from 'components/pages/admin/AdminOrderPage/model';
import {useForm} from 'react-hook-form';

const SetOrderProgress = () => {
    const {order} = useStore(state$);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            progress: order.progress,
        },
    });

    const onSubmit = (data) => {
        setOrderProgressEvent({id: order._id, progress: parseInt(data.progress)});
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.game}>Set progress</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input name="progress" ref={register} type="number" min={0} max={100} />
                <button>Save</button>
            </form>
        </div>
    );
};

export default SetOrderProgress;
