// pages/layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Cindy Yen is a Growth & Product professional who enjoys data-driven growth and innovation. Learn more about Cindy and connect with her today."
                />
            </Head>
            <div className="container">
                <header>
                    <Link href="/">
                        <h1>Cindy Yen</h1>
                        <p>Growth & Product</p>
                    </Link>
                </header>
                <main>{children}</main>
                <footer>
                    <div className="footer">
                        <p style={{ color: "Black" }}>Connect With Me On <Link href="https://linkedin.com/in/cindy-yen" target="_blank">LinkedIn</Link> | Shoot Me An <a href="mailto:cindymeliyen@gmail.com" target="_blank">Email</a></p>
                        <br></br>
                        Made by Cindy Yen, Spencer Lanman, and a little help from AI.
                    </div>
                </footer>
            </div>
        </>
    )
}