import {combine, createEffect, createStore, guard} from 'effector';
import {createGate} from 'effector-react';
import {UserInfo} from 'types/users';
import {fetchUser} from 'api/admin/users';

export const UserProfileGate = createGate<{login: string}>();

const fetchUserFx = createEffect<{login: string}, UserInfo>();
fetchUserFx.use(fetchUser);

const user$ = createStore<UserInfo | null>(null);

export const state$ = combine({
    user: user$,
    userLoading: fetchUserFx.pending,
});

guard({
    source: UserProfileGate.state,
    filter: ({login}) => !!login,
    target: fetchUserFx,
});

user$.on(fetchUserFx.doneData, (_, data) => data).reset(UserProfileGate.close);

user$.watch(console.log)
