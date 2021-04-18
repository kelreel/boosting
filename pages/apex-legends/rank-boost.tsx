import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import {RankBoost} from 'components/pages/landing/RankBoostPage';
import Chatra from 'core/Chatra';
import Footer from "components/ui-kit/Footer";

export default function ApexRankBoost() {
    return (
        <>
            <Head>
                <title>Apex Legends Rank Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <RankBoost />
            </Page>

            <Footer />
            <Chatra />
        </>
    );
}
