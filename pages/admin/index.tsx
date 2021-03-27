import Head from "next/head";
import Page from "components/ui-kit/Page";
import {Login} from "components/pages/admin/Login";
import AdminHeader from "components/ui-kit/admin/AdminHeader/AdminHeader";

export default function AdminIndex() {
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
