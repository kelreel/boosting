import {forward, guard, sample} from "effector";
import {toast} from "react-toastify";
import {
    fetchMessagesFx,
    fetchOrderFx,
    messages$,
    order$,
    OrderGate,
    sendChatMessage, sendMessageFx,
    setAccount, setCredentialsFx
} from "./index";

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

order$.on(fetchOrderFx.doneData, (_, order) => order).reset(OrderGate.close);

setCredentialsFx.doneData.watch(() =>
    toast.success(`Account data saved`, {autoClose: 3000, hideProgressBar: false}),
);

messages$.on(fetchMessagesFx.doneData, (state, payload) => {
    if (
        state.filter((msg) => msg.from !== 'Customer').length !==
        payload.filter((msg) => msg.from !== 'Customer').length &&
        state.length !== 0
    ) {
        console.log('play!');
        const audio = new Audio('/audio/message.mp3');
        audio.play();
    }
    return payload;
}).reset(OrderGate.close);

order$.watch(console.log);
