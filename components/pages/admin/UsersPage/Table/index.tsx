import Table from 'components/ui-kit/Table';
import {useStore} from 'effector-react';
import React from 'react';
import {Gate, pageChanged, pageSizeChanged, state$} from '../model';
import {formatNumber} from 'core/formatters';
import Link from 'next/link';

const columns = [
    {
        Header: 'Login',
        accessor: 'login',
        Cell: ({row: {original}}) => {
            return <Link href={`/admin/users/${original.login}`}>{original.login}</Link>;
        },
    },
    {
        Header: 'Role',
        accessor: 'role',
    },
    {
        Header: 'E-Mail',
        accessor: 'email',
        Cell: ({row: {original}}) => (original.email ? original.email : '-'),
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

export default function UsersTable() {
    const {data, totalCount, page, pageSize, isLoading} = useStore(state$);

    const pagination = {
        page,
        totalCount,
        pageSize,
        onPageChange: pageChanged,
        onPageSizeChange: pageSizeChanged,
    };

    return (
        <div style={{width: '100%', maxWidth: '1000px'}}>
            <Gate />
            <Table data={data} columns={columns} pagination={pagination} isLoading={isLoading} />
        </div>
    );
}
