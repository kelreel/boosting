import {combine, createEffect, createEvent, createStore, guard, forward} from 'effector';
import {createGate} from 'effector-react';
import {UserInfo} from 'types/users';
import {changePassword, changeRole, fetchUser} from 'api/admin/users';
import {toast} from 'react-toastify';
import {UserRole} from 'types/auth';

export const UserProfileGate = createGate<{login: string}>();

const fetchUserFx = createEffect<{login: string}, UserInfo>();
fetchUserFx.use(fetchUser);

const changePasswordFx = createEffect<{login: string; password: string}, any>();
changePasswordFx.use(changePassword);

const changeRoleFx = createEffect<{login: string; role: UserRole}, any>();
changeRoleFx.use(changeRole);

const user$ = createStore<UserInfo | null>(null);

export const changePasswordEvent = createEvent<{login: string; password: string}>();
export const changeRoleEvent = createEvent<{login: string; role: UserRole}>();

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

forward({
    from: changeRoleEvent,
    to: changeRoleFx,
});

user$
    .on(fetchUserFx.doneData, (_, data) => data)
    .on(changeRoleFx.doneData, (_, user) => user)
    .reset(UserProfileGate.close);
changePasswordFx.doneData.watch(() => toast.success('Password changed'));
changeRoleFx.doneData.watch(() => toast.success('Role changed'));

user$.watch(console.log);
