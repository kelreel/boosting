import React from 'react';
import styles from './Common.module.scss';
import {useStore} from 'effector-react';
import {state$} from 'components/pages/order/model';
import {RankIcon} from 'components/pages/landing/RankBoostPage/rankIcon';
import {ApexOrderTypeEnum, ApexRankOrderDetails} from 'types/Apex';

export const AdminOrderInfo = () => {
    const {order} = useStore(state$);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.game}>{order?.game}</p>
                <p className={styles.orderType}>{order?.orderType}</p>
            </div>
            <div className={styles.details}>
                {order.orderType === ApexOrderTypeEnum.RANK_BOOST && (
                    <ApexRankDetails details={order.details} />
                )}
            </div>
            <div className={styles.status}>
                <div className={styles.label}>Status</div>
                {order.status}
            </div>
            <div className={styles.progress}>
                <div className={styles.label}>Progress</div>
                {order.progress}%
            </div>
        </div>
    );
};

const ApexRankDetails = ({details}: {details: ApexRankOrderDetails}) => {
    return (
        <div className={styles.apexRankDetails}>
            <div className={styles.ranks}>
                <div className={styles.rank}>
                    <RankIcon rank={details.fromRank} width={40} />
                    <p>Start {details.fromRank}</p>
                </div>
                <div className={styles.rank}>
                    <RankIcon rank={details.toRank} width={40} />
                    <p>Desired {details.toRank}</p>
                </div>
            </div>
            <div className={styles.meta}>
                <p>Platform: {details.platform}</p>
                <p>Region: {details.region}</p>
            </div>
        </div>
    );
};
