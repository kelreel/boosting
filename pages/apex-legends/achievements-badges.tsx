import Head from 'next/head';
import Header from 'components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import Chatra from 'core/Chatra';
import {KillsBoost} from "components/pages/landing/KillsBoostPage";
import {AchievementsBoost} from "components/pages/landing/AchievementsPage";

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

            <Chatra />
        </>
    );
}
