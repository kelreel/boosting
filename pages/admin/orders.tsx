import Head from 'next/head';
import Page from 'components/ui-kit/Page';
import AdminHeader from 'components/ui-kit/admin/AdminHeader/AdminHeader';
import AdminOrdersPage from 'components/pages/admin/OrdersPage';
import {useStore} from 'effector-react';
import {isAuth$} from 'models/auth';
import {useRouter} from 'next/router';

export default function AdminOrders() {
    const isAuth = useStore(isAuth$);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Orders | Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>{isAuth && <AdminOrdersPage />}</Page>
        </>
    );
}
