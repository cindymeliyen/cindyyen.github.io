// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cindy Yen - Portfolio</title>
        <meta
          name="description"
          content="Product and Data-Driven Growth Portfolio of Cindy Yen"
        />
      </Head>
      <div className="container">
        <header>
          <h1>Cindy Yen</h1>
          <p>Product and Data-Driven Growth</p>
        </header>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <p className="intro">
            These are some projects I’ve worked on during my free time.
          </p>

          <section>
            <h2>Research</h2>
            <ul>
              <li>
                <Link href="/research/nascar-commercial-breaks">
                  <a>NASCAR Commercial Breaks</a>
                </Link>
              </li>
              <li>
                <Link href="/research/nascar-perceptions">
                  <a>NASCAR Perceptions</a>
                </Link>
              </li>
              <li>
                <Link href="/research/retaining-nascar-fan-interest">
                  <a>Retaining NASCAR Fan Interest</a>
                </Link>
              </li>
              <li>
                <Link href="/research/nascar-tableau-graphs">
                  <a>NASCAR Tableau Graphs</a>
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2>Product</h2>
            <ul>
              <li>
                <Link href="/product/webpage-note-taker">
                  <a>Webpage Note Taker</a>
                </Link>
              </li>
              <li>
                <Link href="/product/url-parameter-splitter">
                  <a>URL Parameter Splitter</a>
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2>Analytics</h2>
            <ul>
              <li>
                <Link href="/analytics/nascar-chase-elliott-effect">
                  <a>NASCAR analysis: Chase Elliott effect on viewership</a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/nascar-2023-recap-part1">
                  <a>NASCAR 2023 viewership season recap: Part 1</a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/nascar-2023-recap-part2">
                  <a>NASCAR 2023 viewership season recap: Part 2</a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/tableau-dashboard-nascar">
                  <a>Tableau dashboard showcasing NASCAR viewership trends</a>
                </Link>
              </li>
            </ul>
          </section>
        </main>

        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-family: Arial, sans-serif;
          }
          header {
            text-align: center;
            margin-bottom: 2rem;
          }
          nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 1rem;
            padding: 0;
            margin-bottom: 2rem;
          }
          nav a {
            text-decoration: none;
            color: #0070f3;
          }
          nav a:hover {
            text-decoration: underline;
          }
          .intro {
            text-align: center;
            font-style: italic;
            margin-bottom: 2rem;
          }
          section {
            margin-bottom: 2rem;
          }
          section h2 {
            border-bottom: 1px solid #ddd;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }
          li {
            margin-bottom: 0.5rem;
          }
        `}</style>
      </div>
    </>
  );
}
