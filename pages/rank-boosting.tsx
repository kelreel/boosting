import Head from 'next/head';
import Header from '../components/common/Header';
import Page from '../components/common/Page';
import {RankBoostCalc} from '../components/RankBoostPage';

export default function RankBoost() {
    return (
        <>
            <Head>
                <title>Rank Boost</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <RankBoostCalc />
            </Page>
        </>
    );
}
