import Head from "next/head";
import {Login} from "components/pages/admin/Login";
import AdminHeader from "components/ui-kit/admin/AdminHeader/AdminHeader";
import Page from "components/ui-kit/Page";

export default function LoginPage() {
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
