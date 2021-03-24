import Head from 'next/head';
import Page from '../../components/common/Page';
import AdminHeader from '../../components/admin/Header/AdminHeader';
import AdminApexRankOrderPage from '../../components/admin/RankOrdersPage';
import {useStore} from 'effector-react';
import {isAuth$} from '../../models/auth';
import {useRouter} from 'next/router';

export default function RankBoost() {
    const isAuth = useStore(isAuth$);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Rank Orders | Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>{isAuth && <AdminApexRankOrderPage />}</Page>
        </>
    );
}
