import Table from 'components/ui-kit/Table';
import { useStore } from 'effector-react';
import React from 'react';
import {useTable} from 'react-table';
import { Gate, pageChanged, pageSizeChanged, state$ } from '../model';

const columns = [
    {
        Header: 'ID',
        accessor: '_id',
        Cell: ({row: {original}}) => {
            return original._id
        }
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Price',
        accessor: 'price',
    },
    {
        Header: 'From rank',
        accessor: 'fromRank',
    },
    {
        Header: 'To rank',
        accessor: 'toRank',
    },
    {
        Header: 'Platform',
        accessor: 'platform',
    },
    {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({row: {original}}) => {
            let d = new Date(Date.parse(original.createdAt));
            return d.toLocaleString()
        }
    },
];

export default function OrdersTable() {
    const {
        data,
        totalCount,
        page,
        pageSize,
        isLoading
    } = useStore(state$);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    });

    const pagination = {
        page,
        totalCount,
        pageSize,
        onPageChange: pageChanged,
        onPageSizeChange: pageSizeChanged,
    }

    return (
        <>
            <Gate />
            <Table data={data} columns={columns} pagination={pagination} />
        </>
    );
}
