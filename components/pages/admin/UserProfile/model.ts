import {combine, createEffect, createEvent, createStore, guard, forward} from 'effector';
import {createGate} from 'effector-react';
import {UserInfo} from 'types/users';
import {changePassword, fetchUser} from 'api/admin/users';
import {toast} from 'react-toastify';

export const UserProfileGate = createGate<{login: string}>();

const fetchUserFx = createEffect<{login: string}, UserInfo>();
fetchUserFx.use(fetchUser);

const changePasswordFx = createEffect<{login: string; password: string}, any>();
changePasswordFx.use(changePassword);

const user$ = createStore<UserInfo | null>(null);

export const changePasswordEvent = createEvent<{login: string; password: string}>();

export const state$ = combine({
    user: user$,
    userLoading: fetchUserFx.pending,
});

guard({
    source: UserProfileGate.state,
    filter: ({login}) => !!login,
    target: fetchUserFx,
});

forward({
    from: changePasswordEvent,
    to: changePasswordFx,
});

user$.on(fetchUserFx.doneData, (_, data) => data).reset(UserProfileGate.close);
changePasswordFx.doneData.watch(() => toast.success('Password changed'));

user$.watch(console.log);
