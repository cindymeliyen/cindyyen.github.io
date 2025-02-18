// pages/projects/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Projects() {
  return (
    <>
      <Head>
        <title>Cindy Yen - Projects</title>
        <meta
          name="description"
          content="List of Cindy Yen's Projects"
        />
      </Head>
      <section>
        <h2>Product</h2>
        <ul>
          <li className="project-link">
            <Link href="/product/webpage-note-taker">Webpage Note Taker</Link>
          </li>
          <li className="project-link">
            <Link href="/product/url-parameter-splitter">URL Parameter Splitter</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Analytics</h2>
        <ul>
          <li className="project-link">
            <Link href="https://x.com/cindymeliyen/status/1729547465378914597" target="_blank">NASCAR Viewership Analysis - Chase Elliott Effect</Link>
          </li>
          <li className="project-link">
            <Link href="https://x.com/cindymeliyen/status/1857145050670547212" target="_blank">2024 NASCAR Viewership Recap</Link>
          </li>
          <li className="project-link">
            <Link href="https://public.tableau.com/app/profile/cindymeliyen/viz/NASCARImpressions/Overview" target="_blank">Tableau Dashboard - NASCAR Viewership Trends</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
