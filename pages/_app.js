// pages/_app.js
import Layout from '../components/layout';
import Head from 'next/head';
import '../public/globals.css'; // Keep this path if it's working for you
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-WG35G200HZ';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Function to handle pageview tracking on route changes
        const handleRouteChange = (url) => {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        };

        // Listen for route changes
        router.events.on('routeChangeComplete', handleRouteChange);

        // Clean up event listener
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                {/* Your existing favicon */}
                <link rel="icon" href="/files/cmy_logo.png" type="image/png" />

                {/* Google Analytics Script (gtag.js) */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}');
                        `,
                    }}
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}