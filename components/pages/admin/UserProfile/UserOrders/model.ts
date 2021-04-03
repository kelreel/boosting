import {combine, createDomain, createEffect, merge, sample} from 'effector';
import {createGate} from 'effector-react';
import {PaginationContent} from 'types/api';
import {OrderDocument} from 'types/orders';
import {fetchUserOrders} from 'api/admin/orders';
import {createTableModel} from 'core/hooks/table';

const domain = createDomain('ProfileOrdersDomain');

export const Gate = createGate<{id: string}>('ProfileOrdersGate');
const fetchDataFx = createEffect<
    {
        _id: string;
        page: number;
        pageSize: number;
    },
    PaginationContent<OrderDocument<any>>
>({
    handler: fetchUserOrders,
});

export const {page$, pageChanged, pageSize$, pageSizeChanged} = createTableModel({
    domain,
    defaultPageSize: 10,
});

export const data$ = domain.createStore<OrderDocument<any>[]>([]);
export const totalCount$ = domain.createStore<number>(0);
export const totalPages$ = domain.createStore<number>(1);

export const state$ = combine({
    data: data$,
    totalCount: totalCount$,
    totalPages: totalPages$,
    page: page$,
    pageSize: pageSize$,
    isLoading: fetchDataFx.pending,
});

data$.on(fetchDataFx.done, (state, {result}) => result.data).reset(Gate.close);
totalPages$.on(fetchDataFx.done, (state, {result}) => result.totalPages).reset(Gate.close);
totalCount$.on(fetchDataFx.done, (state, {result}) => result.total).reset(Gate.close);
page$.reset(Gate.close);
pageSize$.reset(Gate.close);

sample({
    clock: merge([Gate.open, pageChanged, pageSizeChanged]),
    source: combine({
        page: page$,
        pageSize: pageSize$,
        _id: Gate.state.map((s) => s.id)
    }),
    target: fetchDataFx,
});
