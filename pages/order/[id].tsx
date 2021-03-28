import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import {OrderPage} from "components/pages/order";
import {useRouter} from "next/router";

export default function ApexRankBoost() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>Order {id} | Mega Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <OrderPage id={id as string} />
            </Page>
        </>
    );
}
