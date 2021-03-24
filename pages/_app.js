import '../styles.scss'

import '../models/init'
import {useGate} from "effector-react";
import {AppGate} from "../models/auth";

function MyApp({ Component, pageProps }) {
    useGate(AppGate);
    return <Component {...pageProps} />
}

export default MyApp
