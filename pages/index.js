// pages/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Cindy Yen - Product | Growth | Data</title>
        <meta
          name="description"
          content="Website for Cindy Yen"
        />
      </Head>
      <section><ul>
        <li className="project-link">
          <Link href="https://cindymeliyen.wordpress.com">About Cindy</Link>
        </li>
        <li className="project-link">
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
      </section>
    </>
  );
}
