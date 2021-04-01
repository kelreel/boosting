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
import {BoosterItem, ChatMessage, OrderDocument} from 'types/orders';
import {
    fetchAdminOrder,
    fetchChatAdminMessages, getBoosters,
    sendChatAdminMessage, setOrderBooster,
    setOrderProgress,
    setOrderStatus
} from 'api/admin/orders';
import {OrderStatusEnum} from "types/Apex";
import { toast } from 'react-toastify';

export const AdminOrderGate = createGate<{id: string}>();
export const SetBoosterGate = createGate<{id: string}>();

const fetchAdminOrderFx = createEffect<{id: string}, OrderDocument<any>>();
fetchAdminOrderFx.use(fetchAdminOrder);

export const fetchAdminMessagesFx = createEffect<{id: string}, ChatMessage[]>();
fetchAdminMessagesFx.use(fetchChatAdminMessages);

const sendAdminMessageFx = createEffect<{id: string; message: string}, any>();
sendAdminMessageFx.use(sendChatAdminMessage);

const setOrderStatusFx = createEffect<{id: string; status: OrderStatusEnum}, OrderDocument<any>>();
setOrderStatusFx.use(setOrderStatus)

const setOrderProgressFx = createEffect<{id: string; progress: number;}, OrderDocument<any>>();
setOrderProgressFx.use(setOrderProgress)

const getBoostersFx = createEffect<any, BoosterItem[]>();
getBoostersFx.use(getBoosters);

const setBoosterFx = createEffect<{id: string; booster_id: string;}, OrderDocument<any>>();
setBoosterFx.use(setOrderBooster);

const orderChanged = createEvent<OrderDocument<any> | null>();
export const order$ = restore(orderChanged, null);

const messages$ = createStore<ChatMessage[]>([]);
export const boosters$ = createStore<BoosterItem[]>([])

// export const setAccount = createEvent<{id: string; email: string; password: string}>();
export const sendChatMessage = createEvent<{id: string; message: string}>();
export const setOrderStatusEvent = createEvent<{id: string; status: OrderStatusEnum}>();
export const setOrderProgressEvent = createEvent<{id: string; progress: number}>();
export const setBoosterEvent = createEvent<{id: string; booster_id: string;}>();

export const state$ = combine({
    order: order$,
    messages: messages$,
    boosters: boosters$,
    boostersLoading: getBoostersFx.pending,
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

guard({
    source: SetBoosterGate.state,
    filter: ({id}) => !!id,
    target: getBoostersFx,
});

forward({
    from: sendChatMessage,
    to: sendAdminMessageFx,
});

forward({
    from: setOrderStatusEvent,
    to: setOrderStatusFx,
});

forward({
    from: setOrderProgressEvent,
    to: setOrderProgressFx,
});

forward({
    from: setBoosterEvent,
    to: setBoosterFx,
});

sample({
    clock: sendAdminMessageFx.doneData,
    source: AdminOrderGate.state,
    fn: (state) => ({id: state.id}),
    target: fetchAdminMessagesFx,
});

order$.on(fetchAdminOrderFx.doneData, (_, order) => order).reset(AdminOrderGate.close);
boosters$.on(getBoostersFx.doneData, (_, data) => data).reset(SetBoosterGate.close)

setOrderStatusFx.doneData.watch(() =>
    toast.success(`Status saved`, {autoClose: 3000, hideProgressBar: false}),
);

setOrderProgressFx.doneData.watch(() =>
    toast.success(`Progress saved`, {autoClose: 3000, hideProgressBar: false}),
);

setBoosterFx.doneData.watch(() =>
    toast.success(`Booster assigned`, {autoClose: 3000, hideProgressBar: false}),
);

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
