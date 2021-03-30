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
import {fetchAdminOrder, fetchChatAdminMessages, sendChatAdminMessage} from 'api/admin/orders';

export const AdminOrderGate = createGate<{id: string}>();

const fetchAdminOrderFx = createEffect<{id: string}, OrderDocument<any>>();
fetchAdminOrderFx.use(fetchAdminOrder);

export const fetchAdminMessagesFx = createEffect<{id: string}, ChatMessage[]>();
fetchAdminMessagesFx.use(fetchChatAdminMessages);

const sendAdminMessageFx = createEffect<{id: string; message: string}, any>();
sendAdminMessageFx.use(sendChatAdminMessage);

const orderChanged = createEvent<OrderDocument<any> | null>();
export const order$ = restore(orderChanged, null);

const messages$ = createStore<ChatMessage[]>([]);

// export const setAccount = createEvent<{id: string; email: string; password: string}>();
export const sendChatMessage = createEvent<{id: string; message: string}>();

export const state$ = combine({
    order: order$,
    messages: messages$,
    orderLoading: fetchAdminOrderFx.pending,
    sendMessageLoading: sendAdminMessageFx.pending,
    fetchChatLoading: fetchAdminMessagesFx.pending,
});

guard({
    source: AdminOrderGate.state,
    filter: ({id}) => !!id,
    target: fetchAdminOrderFx,
});

guard({
    source: AdminOrderGate.state,
    filter: ({id}) => !!id,
    target: fetchAdminMessagesFx,
});

forward({
    from: sendChatMessage,
    to: sendAdminMessageFx,
});

sample({
    clock: sendAdminMessageFx.doneData,
    source: AdminOrderGate.state,
    fn: (state) => ({id: state.id}),
    target: fetchAdminMessagesFx,
});

order$.on(fetchAdminOrderFx.doneData, (_, order) => order).reset(AdminOrderGate.close);

// setCredentialsFx.doneData.watch(() =>
//     toast.success(`Account data saved`, {autoClose: 3000, hideProgressBar: false}),
// );

messages$
    .on(fetchAdminMessagesFx.doneData, (state, payload) => {
        if (
            state.filter((msg) => msg.from === 'Customer').length !==
                payload.filter((msg) => msg.from === 'Customer').length &&
            state.length !== 0
        ) {
            console.log('play!');
            const audio = new Audio('/audio/message.mp3');
            audio.play();
        }
        return payload;
    })
    .reset(AdminOrderGate.close);

order$.watch(console.log);
// OrderGate.state.watch(console.log)
