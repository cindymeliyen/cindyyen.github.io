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

        <main>
          <p className="intro">
            These are some projects I’ve worked on during my free time.
          </p>

          <section>
            <h2>Research</h2>
            <ul>
              <li>
                <Link href="/research/nascar-commercial-breaks">
                  <a className="project-link">NASCAR Commercial Breaks</a>
                </Link>
              </li>
              <li>
                <Link href="/research/nascar-perceptions">
                  <a className="project-link">NASCAR Perceptions</a>
                </Link>
              </li>
              <li>
                <Link href="/research/retaining-nascar-fan-interest">
                  <a className="project-link">Retaining NASCAR Fan Interest</a>
                </Link>
              </li>
              <li>
                <Link href="/research/nascar-tableau-graphs">
                  <a className="project-link">NASCAR Tableau Graphs</a>
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2>Product</h2>
            <ul>
              <li>
                <Link href="/product/webpage-note-taker">
                  <a className="project-link">Webpage Note Taker</a>
                </Link>
              </li>
              <li>
                <Link href="/product/url-parameter-splitter">
                  <a className="project-link">URL Parameter Splitter</a>
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2>Analytics</h2>
            <ul>
              <li>
                <Link href="/analytics/nascar-chase-elliott-effect">
                  <a className="project-link">
                    NASCAR analysis: Chase Elliott effect on viewership
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/nascar-2023-recap-part1">
                  <a className="project-link">
                    NASCAR 2023 viewership season recap: Part 1
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/nascar-2023-recap-part2">
                  <a className="project-link">
                    NASCAR 2023 viewership season recap: Part 2
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/analytics/tableau-dashboard-nascar">
                  <a className="project-link">
                    Tableau dashboard showcasing NASCAR viewership trends
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        body {
          margin: 0;
          background: #f0f2f5;
          font-family: Arial, sans-serif;
        }
      `}</style>

      {/* Component-specific styles */}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 1rem auto; /* Reduced margin */
          padding: 1.5rem; /* Reduced padding */
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        header {
          text-align: center;
          margin-bottom: 1.5rem; /* Reduced bottom margin */
          padding: 1rem;
          background: linear-gradient(135deg, #0070f3, #66a6ff);
          color: #fff;
          border-radius: 8px;
        }
        header h1 {
          margin: 0;
          font-size: 3rem; /* Increased font size for the name */
        }
        nav ul {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 0;
          margin-bottom: 1.5rem; /* Reduced bottom margin */
        }
        nav a {
          text-decoration: none;
          color: #0070f3;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .intro {
          text-align: center;
          font-style: italic;
          margin-bottom: 1.5rem; /* Reduced margin */
        }
        section {
          margin-bottom: 1.5rem; /* Reduced margin */
        }
        section h2 {
          border-bottom: 2px solid #ddd;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        .project-link {
          display: block;
          padding: 0.75rem 1rem;
          border: 2px solid transparent;
          border-radius: 5px;
          transition: background-color 0.3s ease, border-color 0.3s ease,
            transform 0.3s ease;
          color: #333;
          text-decoration: none;
          background: #fafafa;
        }
        .project-link:hover {
          background-color: #e0f7fa;
          border-color: #0070f3;
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
