import Head from "next/head";
import AdminHeader from "components/ui-kit/admin/AdminHeader/AdminHeader";
import Page from "components/ui-kit/Page";
import {Register} from "components/pages/admin/Register";

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>
                <Register />
            </Page>
        </>
    );
}
