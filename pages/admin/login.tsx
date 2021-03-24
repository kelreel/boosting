import Head from "next/head";
import Page from "../../components/common/Page";
import {Login} from "../../components/admin/Login";
import AdminHeader from "../../components/admin/Header/AdminHeader";

export default function RankBoost() {
    return (
        <>
            <Head>
                <title>Admin login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>
                <Login />
            </Page>
        </>
    );
}
