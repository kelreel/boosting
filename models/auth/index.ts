import {createEffect, createEvent, createStore, forward} from 'effector';
import {AuthData, AuthRequest, AuthResponse} from '../../types/auth';
import {fetchAuthInfo} from '../../api/admin/auth';
import {TokenStorage} from '../../core/tokenStorage';
import {RestError, showRestError} from '../../core/errors';

export const loginFx = createEffect<AuthRequest, AuthData>();
loginFx.use(fetchAuthInfo);

export const logoutFx = createEffect<void, void>();
logoutFx.use(TokenStorage.removeToken);

export const doLogin = createEvent<{login: string; password: string}>();
export const doLogout = createEvent<boolean>();

export const sessionUser$ = createStore<AuthData | null>(null);
export const isAuth$ = sessionUser$.map((user) => !!user);

sessionUser$
    // .on(loadSessionUserFx.doneData, (state, data) => data)
    .on(loginFx.doneData, (state) => state)
    .reset(logoutFx.finally);

forward({
    from: doLogin,
    to: loginFx,
});

forward({
    from: doLogout,
    to: logoutFx,
});

loginFx.failData.watch((err) => showRestError(err as RestError));
