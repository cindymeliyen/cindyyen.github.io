// pages/layout.js
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Webpage Note Taker - Cindy Yen</title>
                <meta
                    name="description"
                    content="Product: Webpage Note Taker by Cindy Yen"
                />
            </Head>
            <div className="container">
                <header>
                    <h1>Cindy Yen</h1>
                    <p>Product | Growth | Data</p>
                </header>
                <main>{children}</main>
                <footer>
                    Made by Slanman
                </footer>
            </div>
        </>
    )
}