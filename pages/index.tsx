import Head from 'next/head'
import Header from "../components/common/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Apex Boost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}