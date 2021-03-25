import {forward} from "effector";
import {AppGate, authInitFx, doLogin, doLogout, loginFx, logoutFx, sessionUser$} from "./index";

sessionUser$
    .on(authInitFx.doneData, (state, data) => data)
    .on(loginFx.doneData, (state, data) => data)
    .reset(logoutFx.finally);

forward({
    from: doLogin,
    to: loginFx,
});

forward({
    from: doLogout,
    to: logoutFx,
});

forward({
    from: AppGate.open,
    to: authInitFx
})

// loginFx.failData.watch((err) => showRestError(err as RestError));
