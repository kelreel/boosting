import Head from "next/head";
import Page from "../../components/common/Page";
import {Login} from "../../components/admin/Login";

export default function RankBoost() {
    return (
        <>
            <Head>
                <title>Admin login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*<Header />*/}

            <Page>
                <Login />
            </Page>
        </>
    );
}
