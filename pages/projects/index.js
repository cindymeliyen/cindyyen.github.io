// pages/projects/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Projects() {
  return (
    <>      
    <nav>
    <Link href="/">← Back to Home</Link>
    </nav>
      <Head>
        <title>Cindy Yen - Projects</title>
        <meta
          name="description"
          content="List of Cindy Yen's Projects"
        />
      </Head>
      <section>
        <h2>Projects</h2>
        <ul>
          <li className="project-link">
            <Link href="/product/webpage-note-taker">Webpage Note Taker</Link>
          </li>
          <li className="project-link">
            <Link href="/product/url-param-splitter">URL Parameter Splitter</Link>
          </li><
            li className="project-link">
            <Link href="/analytics/nascar-analysis">NASCAR Analysis</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
