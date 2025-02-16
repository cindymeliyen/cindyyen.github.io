// pages/projects/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Projects() {
  return (
    <>
      <p className="intro">
        These are some projects I’ve worked on during my free time.
      </p>

      <section>
        <h2>Product</h2>
        <ul>
          <li className="project-link">
            <Link href="/product/webpage-note-taker">
              Webpage Note Taker
            </Link>
          </li>
          <li className="project-link">
            <Link href="/product/url-parameter-splitter">
              URL Parameter Splitter
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Analytics</h2>
        <ul>
          <li className="project-link">
            <Link href="/analytics/nascar-chase-elliott-effect">
              NASCAR analysis: Chase Elliott effect on viewership
            </Link>
          </li>
          <li className="project-link">
            <Link href="/analytics/nascar-2023-recap-part1">
              NASCAR 2023 viewership season recap: Part 1
            </Link>
          </li>
          <li className="project-link">
            <Link href="/analytics/nascar-2023-recap-part2">
              NASCAR 2023 viewership season recap: Part 2
            </Link>
          </li>
          <li className="project-link">
            <Link href="/analytics/tableau-dashboard-nascar">Tableau dashboard showcasing NASCAR viewership trends</Link>
          </li>
        </ul>
      </section>

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