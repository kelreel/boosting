import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import Chatra from 'core/Chatra';
import {AchievementsBoost} from "components/pages/landing/AchievementsPage";
import Footer from "components/ui-kit/Footer";

export default function AchievementsBadgesBoost() {
    return (
        <>
            <Head>
                <title>Apex Legends Achievements Badges Boosting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <AchievementsBoost />
            </Page>

            <Footer />
            <Chatra />
        </>
    );
}
