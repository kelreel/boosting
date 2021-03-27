import {createEffect, createEvent, createStore} from 'effector';
import {AuthData, AuthRequest} from 'types/auth';
import {fetchAuthInfo} from 'api/admin/auth';
import {TokenStorage} from 'core/tokenStorage';
import {createGate} from 'effector-react';
import jwt_decode from 'jwt-decode';

export const AppGate = createGate();

export const loginFx = createEffect<AuthRequest, AuthData>();
loginFx.use(fetchAuthInfo);

export const logoutFx = createEffect<void, void>();
logoutFx.use(TokenStorage.removeToken);

export const authInitFx = createEffect(() => {
    const current_time = Date.now() / 1000;
    const data = jwt_decode(TokenStorage.token) as AuthData & {exp: number};
    if ( data.exp < current_time) {
        throw 'Auth token expired, please, login.'
    }
    return data;
});

export const doLogin = createEvent<{login: string; password: string}>();
export const doLogout = createEvent();

export const sessionUser$ = createStore<AuthData | null>(null);
export const isAuth$ = sessionUser$.map((user) => !!user);

// sessionUser$.watch((val) => console.log(`user:`, val))
// isAuth$.watch((val) => console.log(`isAuth:`, val))
