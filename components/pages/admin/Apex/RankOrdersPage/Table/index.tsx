import Table from 'components/ui-kit/Table';
import { useStore } from 'effector-react';
import React from 'react';
import {useTable} from 'react-table';
import { Gate, pageChanged, pageSizeChanged, state$ } from '../model';
import {formatNumber} from "core/formatters";

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
        Cell: ({row: {original}}) => {
            return formatNumber(original.price, true, 2)
        }
    },
    {
        Header: 'From rank',
        accessor: 'fromRank',
        Cell: ({row: {original}}) => {
            return formatNumber(original.fromRank)
        }
    },
    {
        Header: 'To rank',
        accessor: 'toRank',
        Cell: ({row: {original}}) => {
            return formatNumber(original.toRank)
        }
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
            <Table data={data} columns={columns} pagination={pagination} isLoading={isLoading} />
        </>
    );
}
