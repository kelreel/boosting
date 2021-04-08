import Table from 'components/ui-kit/Table';
import {useStore} from 'effector-react';
import React from 'react';
import {Gate, pageChanged, pageSizeChanged, state$} from '../model';
import {formatNumber} from 'core/formatters';
import Link from 'next/link';
import {ADMIN_ROUTE} from 'core/routes';
import Badge from 'components/ui-kit/Badge';
import {OrderStatusColor} from 'types/orders';
import ProgressBar from '@ramonak/react-progress-bar';
import {OrderStatusEnum} from 'types/Apex';

const columns = [
    {
        Header: 'ID',
        accessor: '_id',
        Cell: ({row: {original}}) => {
            return (
                <Link href={`${ADMIN_ROUTE.ORDERS}/${original._id}`}>
                    {original._id.toUpperCase()}
                </Link>
            );
        },
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({row: {original}}) => {
            return (
                <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
                    <Badge type={OrderStatusColor.get(original.status)}>
                        <span style={{textAlign: 'center', fontWeight: 500, fontSize: '12px'}}>
                            {original.status}
                        </span>
                    </Badge>
                    {original.status === OrderStatusEnum.IN_PROGRESS && (
                        <ProgressBar
                            margin="5px 0px 0px 0px"
                            height="8px"
                            width="90px"
                            completed={original.progress}
                            bgColor="#2aa940"
                            baseBgColor="#c1c1c1"
                            isLabelVisible={false}
                        />
                    )}
                </div>
            );
        },
    },
    {
        Header: 'Price',
        accessor: 'price',
        Cell: ({row: {original}}) => {
            return formatNumber(original.price, true, 2);
        },
    },
    {
        Header: 'Game',
        accessor: 'game',
    },
    {
        Header: 'Order Type',
        accessor: 'orderType',
    },
    {
        Header: 'Booster',
        accessor: 'booster',
        Cell: ({row: {original}}) => {
            if (original?.booster) {
                return (
                    <Link href={`${ADMIN_ROUTE.USERS}/${original.booster.login}`}>
                        {original.booster.login}
                    </Link>
                );
            }
            return '—';
        },
    },
    {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({row: {original}}) => {
            let d = new Date(Date.parse(original.createdAt));
            return d.toLocaleString();
        },
    },
];

export default function OrdersTable() {
    const {data, totalCount, page, pageSize, isLoading} = useStore(state$);

    const pagination = {
        page,
        totalCount,
        pageSize,
        onPageChange: pageChanged,
        onPageSizeChange: pageSizeChanged,
    };

    return (
        <div style={{width: '100%', maxWidth: '1200px'}}>
            <Gate />
            <Table data={data} columns={columns} pagination={pagination} isLoading={isLoading} />
        </div>
    );
}
