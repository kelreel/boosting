import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import {OrderPage} from "components/pages/order";
import {useRouter} from "next/router";
import 'components/pages/order/model/init'
import Chatra from "core/Chatra";
import Footer from "components/ui-kit/Footer";

export default function LandingOrderPage() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>Order {typeof id === "string" ? id?.toUpperCase() : ""} | Mega Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <OrderPage id={id as string} />
            </Page>

            <Footer />
            <Chatra />
        </>
    );
}
