import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import Chatra from 'core/Chatra';
import {KillsBoost} from "components/pages/landing/KillsBoostPage";

export default function ApexRankBoost() {
    return (
        <>
            <Head>
                <title>Apex Legends Kills Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <KillsBoost />
            </Page>

            <Chatra />
        </>
    );
}
