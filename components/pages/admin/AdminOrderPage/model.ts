import {
    combine,
    createEffect,
    createEvent,
    createStore,
    forward,
    guard,
    restore,
    sample,
} from 'effector';
import {createGate} from 'effector-react';
import {ChatMessage, OrderDocument} from 'types/orders';
import {fetchMessages, fetchOrder, sendMessage, setCredentials} from 'api/landing/order';
import {toast} from 'react-toastify';

export const OrderGate = createGate<{id: string}>();

const fetchOrderFx = createEffect<{id: string}, OrderDocument<any>>();
fetchOrderFx.use(fetchOrder);

const fetchMessagesFx = createEffect<{id: string}, ChatMessage[]>();
fetchMessagesFx.use(fetchMessages);

const setCredentialsFx = createEffect<{id: string; email: string; password: string}, any>();
setCredentialsFx.use(setCredentials);

const sendMessageFx = createEffect<{id: string; message: string}, any>();
sendMessageFx.use(sendMessage);

const orderChanged = createEvent<OrderDocument<any> | null>();
export const order$ = restore(orderChanged, null);

// const messagesChanged = createEvent<ChatMessage[]>();
const messages$ = createStore<ChatMessage[]>([]);

export const setAccount = createEvent<{id: string; email: string; password: string}>();
export const sendChatMessage = createEvent<{id: string; message: string}>();

export const state$ = combine({
    order: order$,
    messages: messages$,
    orderLoading: fetchOrderFx.pending,
    credentialsLoading: setCredentialsFx.pending,
    sendMessageLoading: sendMessageFx.pending,
    fetchChatLoading: fetchMessagesFx.pending,
});

guard({
    source: OrderGate.state,
    filter: ({id}) => !!id,
    target: fetchOrderFx,
});

guard({
    source: OrderGate.state,
    filter: ({id}) => !!id,
    target: fetchMessagesFx,
});

forward({
    from: setAccount,
    to: setCredentialsFx,
});

forward({
    from: sendChatMessage,
    to: sendMessageFx,
});

sample({
    clock: sendMessageFx.doneData,
    source: OrderGate.state,
    fn: (state) => ({id: state.id}),
    target: fetchMessagesFx
})

// upd order after set credentials
// sample({
//     clock: setCredentialsFx.doneData,
//     source: OrderGate.state,
//     fn: (state) => ({id: state.id}),
//     target: fetchOrderFx
// })

order$.on(fetchOrderFx.doneData, (_, order) => order).reset(OrderGate.close);

setCredentialsFx.doneData.watch(() =>
    toast.success(`Account data saved`, {autoClose: 3000, hideProgressBar: false}),
);

messages$.on(fetchMessagesFx.doneData, (_, val) => val).reset(OrderGate.close);

order$.watch(console.log);
// OrderGate.state.watch(console.log)
