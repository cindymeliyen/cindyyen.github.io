// pages/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Cindy Yen - Growth, Product, Marketing & Analytics </title>
        <meta
          name="description"
          content="Cindy Yen is a growth professional who enjoys data-driven marketing and product innovation. Learn more about Cindy and connect with her today."
        />
      </Head>
      <navigation><ul>
                <li>
          <Link href="/cindybot" className="project-link">
            **NEW** Chat with CindyBot
          </Link>
        </li>
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
      </navigation>
    </>
  );
}
