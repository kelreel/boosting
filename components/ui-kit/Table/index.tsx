import React from "react";
import {useTable} from 'react-table';
import Pagination from "react-js-pagination";
import styles from './Table.module.scss';
import classnames from 'classnames';

interface Props {
    columns: any[],
    data: any[],
    isLoading?: boolean;
    pagination?: {
        page: number;
        totalCount: number;
        pageSize: number;
        onPageChange: (page: number) => void,
        onPageSizeChange: (size: number) => void;
    }
}

export default function Table({columns, data, pagination, isLoading}: Props) {
    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    });

    const pageChange = (page) => {
        pagination.onPageChange(page);
    }

    let classNames = classnames({ [styles.wait]: isLoading });

    // Render the UI for your table
    return (
        <div className={styles.container}>
            {isLoading && <div className={styles.loading}>
                <h4>Loading...</h4>
            </div>}
            <table className={classNames} {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {pagination && <Pagination
                innerClass={styles.pagination}
                activePage={pagination.page}
                totalItemsCount={pagination.totalCount}
                itemsCountPerPage={pagination.pageSize}
                pageRangeDisplayed={5}
                onChange={pageChange}
                prevPageText="Back"
                nextPageText="Next"
                activeClass={styles.active}
            />}
        </div>
    );
}
