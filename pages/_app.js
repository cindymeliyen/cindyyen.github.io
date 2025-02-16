import Layout from '../components/layout'

import '../public/globals.css';


export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
