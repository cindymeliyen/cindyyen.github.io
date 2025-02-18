// pages/layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                <header>
                <Link href="/">
                    <h1>Cindy Yen</h1>
                    <p>Product | Growth | Data</p>
                    </Link>
                </header>
                <main>{children}</main>
                <footer>
                    <div className="footer">
                        Made by Cindy Yen, Spencer Lanman, and a little help from AI
                        <br></br><br></br>
                        Looking for more? Check out the <Link href="https://cindymeliyen.wordpress.com"> full site</Link>.
                    </div>
                </footer>
            </div>
        </>
    )
}