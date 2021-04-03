import React from 'react';
import styles from './AdminHeader.module.scss';
import {useStore} from 'effector-react';
import {doLogout, isAuth$, sessionUser$} from 'models/auth';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {ADMIN_ROUTE, ROUTE} from 'core/routes';

export default function AdminHeader() {
    const isAuth = useStore(isAuth$);
    const user = useStore(sessionUser$);
    const router = useRouter();

    const logout = () => {
        doLogout();
        router.push(ADMIN_ROUTE.LOGIN);
    };

    return (
        <header className={styles.header}>
            <div className={styles.main}>
                <div className={styles.logo}>Admin panel</div>
                {isAuth ? (
                    <>
                        <div className={styles.meta}>
                            <div className={styles.login}>
                                Hello, {user.login}!{' '}
                                <span className={styles.role}>({user.role})</span>
                            </div>
                            <button className={styles.logout} onClick={logout}>
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <Link href={ADMIN_ROUTE.LOGIN}>
                        <a>Login</a>
                    </Link>
                )}
            </div>

            {isAuth && (
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href={ADMIN_ROUTE.ORDERS}>
                                <a>Orders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={ADMIN_ROUTE.USERS}>
                                <a>Users</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
