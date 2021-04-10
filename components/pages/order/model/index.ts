import {combine, createEffect, createEvent, createStore, restore,} from 'effector';
import {createGate} from 'effector-react';
import {ChatMessage, OrderDocument} from 'types/orders';
import {fetchMessages, fetchOrder, sendMessage, setCredentials} from 'api/landing/order';

export const OrderGate = createGate<{id: string}>();

export const fetchOrderFx = createEffect<{id: string}, OrderDocument<any>>();
fetchOrderFx.use(fetchOrder);

export const fetchMessagesFx = createEffect<{id: string}, ChatMessage[]>();
fetchMessagesFx.use(fetchMessages);

export const setCredentialsFx = createEffect<{id: string; email: string; password: string}, any>();
setCredentialsFx.use(setCredentials);

export const sendMessageFx = createEffect<{id: string; message: string}, any>();
sendMessageFx.use(sendMessage);

const orderChanged = createEvent<OrderDocument<any> | null>();
export const order$ = restore(orderChanged, null);

export const messages$ = createStore<ChatMessage[]>([]);

export const setAccount = createEvent<{id: string; email: string; password: string}>();
export const sendChatMessage = createEvent<{id: string; message: string}>();

export const orderPaidSuccess = createEvent<any>()

export const state$ = combine({
    order: order$,
    messages: messages$,
    orderLoading: fetchOrderFx.pending,
    credentialsLoading: setCredentialsFx.pending,
    sendMessageLoading: sendMessageFx.pending,
    fetchChatLoading: fetchMessagesFx.pending,
});

