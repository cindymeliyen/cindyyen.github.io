// pages/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Cindy Yen - Growth & Product </title>
        <meta
          name="description"
          content="Cindy Yen is a Growth & Product professional who enjoys data-driven growth and innovation. Learn more about Cindy and connect with her today."
        />
      </Head>
      <section><ul>
        <li>
          <Link href="/about" className="project-link">
            About Cindy
          </Link>
        </li>
        <li>
          <Link href="/projects" className="project-link">
            Projects
          </Link>
        </li>
      </ul>
      </section>
    </>
  );
}
