import {combine, createEffect, createEvent, forward, guard, restore, sample} from 'effector';
import {createGate} from 'effector-react';
import {OrderDocument} from 'types/orders';
import {fetchOrder, sendMessage, setCredentials} from 'api/landing/order';
import {toast} from "react-toastify";

export const OrderGate = createGate<{id: string}>();

const fetchOrderFx = createEffect<{id: string}, OrderDocument<any>>();
fetchOrderFx.use(fetchOrder);

const setCredentialsFx = createEffect<{_id: string; email: string; password: string}, any>();
setCredentialsFx.use(setCredentials);

const sendMessageFx = createEffect<{_id: string; message: string}, any>();
sendMessageFx.use(sendMessage);

const orderChanged = createEvent<OrderDocument<any> | null>();
export const order$ = restore(orderChanged, null);

export const setAccount = createEvent<{_id: string; email: string; password: string}>();

export const state$ = combine({
    order: order$,
    orderLoading: fetchOrderFx.pending,
    credentialsLoading: setCredentialsFx.pending,
    sendMessageLoading: sendMessageFx.pending,
});

guard({
    source: OrderGate.state,
    filter: ({id}) => !!id,
    target: fetchOrderFx,
});

forward({
    from: setAccount,
    to: setCredentialsFx,
});

order$.on(fetchOrderFx.doneData, (_, order) => order).reset(OrderGate.close);

setCredentialsFx.doneData.watch(() => toast.success(`Account data saved`, {autoClose: 3000, hideProgressBar: false}))

order$.watch(console.log);
// OrderGate.state.watch(console.log)
