import Head from 'next/head';
import Header from '../components/ui-kit/Header';
import Page from 'components/ui-kit/Page';
import {Home} from 'components/pages/landing/Home';
import Footer from 'components/ui-kit/Footer';

export default function HomePage() {
    return (
        <div className="container">
            <Head>
                <html lang="en" />
                <title>
                    Mega-Boosting. Professional Game Boosting Service | Apex Legends, Valorant, Call
                    of Duty boost.
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Page>
                <Home />
            </Page>

            <Footer />
        </div>
    );
}
