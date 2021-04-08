import React from 'react';
import styles from './Common.module.scss';
import {useStore} from 'effector-react';
import {state$} from 'components/pages/admin/AdminOrderPage/model';
import {RankIcon} from 'components/pages/landing/RankBoostPage/rankIcon';
import {ApexOrderTypeEnum, ApexRankOrderDetails} from 'types/Apex';
import Badge from 'components/ui-kit/Badge';
import {OrderStatusColor} from 'types/orders';
import ProgressBar from '@ramonak/react-progress-bar';

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
                <Badge type={OrderStatusColor.get(order.status)}>
                    <span style={{textAlign: 'center', fontWeight: 500, fontSize: '18px'}}>
                        {order.status}
                    </span>
                </Badge>
            </div>
            <div className={styles.progress}>
                <div className={styles.label}>Progress</div>
                <div className={styles.bar}>
                    <ProgressBar
                        margin="10px"
                        completed={order.progress}
                        labelAlignment="outside"
                        height="16px"
                        labelSize="14px"
                        bgColor="#2aa940"
                        baseBgColor="#c1c1c1"
                        labelColor="#fff"
                    />
                </div>
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
            {details.streaming && (
                <div className={styles.meta}>
                    <Badge type={'green'}>STREAMING</Badge>
                </div>
            )}
        </div>
    );
};
