import Table from 'components/ui-kit/Table';
import {useStore} from 'effector-react';
import React from 'react';
import {formatNumber} from 'core/formatters';
import Link from 'next/link';
import {state$, Gate, pageSizeChanged, pageChanged} from './model';
import {ADMIN_ROUTE} from 'core/routes';

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
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({row: {original}}) => {
            let d = new Date(Date.parse(original.createdAt));
            return d.toLocaleString();
        },
    },
];

export function UserOrdersTable({id}: {id: string}) {
    const {data, totalCount, page, pageSize, isLoading} = useStore(state$);

    const pagination = {
        page,
        totalCount,
        pageSize,
        onPageChange: pageChanged,
        onPageSizeChange: pageSizeChanged,
    };

    return (
        <>
            <Gate id={id} />
            {data.length === 0 ? (
                <h2 style={{textAlign: 'center'}}>User not have orders</h2>
            ) : (
                <Table
                    data={data}
                    columns={columns}
                    pagination={pagination}
                    isLoading={isLoading}
                />
            )}
        </>
    );
}
