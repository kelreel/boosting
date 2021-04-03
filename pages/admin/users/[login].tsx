import Head from 'next/head';
import Page from 'components/ui-kit/Page';
import {useRouter} from "next/router";
import AdminHeader from "components/ui-kit/admin/AdminHeader/AdminHeader";
import {UserProfile} from "components/pages/admin/UserProfile";

export default function OrderPageAdmin() {
    const router = useRouter()
    const { login } = router.query
    return (
        <>
            <Head>
                <title>{typeof login === "string" ? login?.toUpperCase() : ""} | Mega Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>
                <UserProfile login={login as string} />
            </Page>
        </>
    );
}
