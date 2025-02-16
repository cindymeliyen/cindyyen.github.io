// pages/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <section><ul>
        <li className="project-link">
          <Link href="https://cindymeliyen.wordpress.com">About Cindy</Link>
        </li>
        <li className="project-link">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="project-link">
          <Link href="https://cindymeliyen.wordpress.com">Additional</Link>
        </li>
      </ul>
      </section>

      {/* Component-specific styles */}
      <style jsx>{`
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
