// pages/_app.js

import Layout from '../components/layout';
import Head from 'next/head';
import '../public/globals.css';


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>

                <link rel="icon" href="/files/cmy_logo.png" type="image/png" />

            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}