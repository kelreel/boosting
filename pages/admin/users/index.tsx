import Head from 'next/head';
import Page from 'components/ui-kit/Page';
import AdminHeader from 'components/ui-kit/admin/AdminHeader/AdminHeader';
import {useStore} from 'effector-react';
import {isAuth$} from 'models/auth';
import {useRouter} from 'next/router';
import AdminUsersPage from "components/pages/admin/UsersPage";

export default function AdminUsers() {
    const isAuth = useStore(isAuth$);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Users | Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>{isAuth && <AdminUsersPage />}</Page>
        </>
    );
}
