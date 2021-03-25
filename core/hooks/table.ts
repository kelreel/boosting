import {merge, restore, Domain} from 'effector';

export function createTableModel({
    domain,
    defaultPageSize = 20
}: {
    domain: Domain;
    defaultPageSize?: number;
}) {
    const pageChanged = domain.createEvent<number>('pageNumberChanged');
    const pageSizeChanged = domain.createEvent<number>('pageSizeChanged');

    const tableStateChanged = merge([
        pageChanged,
        pageSizeChanged,
    ]);

    const page$ = restore(pageChanged, 1)
    const pageSize$ = restore(pageSizeChanged, defaultPageSize);

    return {
        pageChanged,
        pageSizeChanged,
        page$,
        pageSize$,
        tableStateChanged,
    };
}
