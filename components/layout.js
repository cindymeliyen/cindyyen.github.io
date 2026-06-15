// pages/layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Cindy Yen is a product professional specializing in data-driven growth. Learn more about Cindy and connect with her today."
                />
            </Head>
            <div className="container">
                <header>
                    <Link href="/">
                        <h1>Cindy Yen</h1>
                        <p>Growth • Product • Marketing • Analytics</p>
                    </Link>
                </header>
                <main>{children}</main>
                <footer>
                    <div className="footer">
                        <p style={{ color: "Black" }}> Check Out More: <br></br>
                            <Link href="https://linkedin.com/in/cindy-yen" target="_blank" rel="noopener noreferrer">LinkedIn</Link> • <Link href="https://github.com/cindymeliyen" target="_blank" rel="noopener noreferrer">Github</Link> • <a href="mailto:cindymeliyen@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a></p>
                        <br></br>
                        Cindy Yen © 2026
                    </div>
                </footer>
            </div>
        </>
    )
}