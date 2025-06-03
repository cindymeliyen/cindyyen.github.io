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
                    <p>Growth & Product</p>
                    </Link>
                </header>
                <main>{children}</main>
                <footer>
                    <div className="footer">
                        <p style={{color:"Black"}}>Connect With Me On <Link href="https://linkedin.com/in/cindy-yen">LinkedIn</Link> | Shoot Me An <a href="mailto:cindymeliyen@gmail.com">Email</a></p>
                        <br></br>
                        Made by Cindy Yen, Spencer Lanman, and a little help from AI.
                    </div>
                </footer>
            </div>
        </>
    )
}