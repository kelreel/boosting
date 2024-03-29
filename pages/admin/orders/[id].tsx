import Head from 'next/head';
import Page from 'components/ui-kit/Page';
import {useRouter} from "next/router";
import AdminHeader from "components/ui-kit/admin/AdminHeader/AdminHeader";
import {AdminOrderPage} from "components/pages/admin/AdminOrderPage";

export default function OrderPageAdmin() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>Order {typeof id === "string" ? id?.toUpperCase() : ""} (ADMIN) | Mega Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AdminHeader />

            <Page>
                <AdminOrderPage id={id as string} />
            </Page>
        </>
    );
}
