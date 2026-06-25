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
      <navigation>
        <h2>Projects</h2>
        <ul>
          <li className="project-link">
            <Link href="/projects/cindybot-project">CindyBot - AI Chatbot</Link>
          </li>
          <li className="project-link">
            <Link href="/projects/youre-bald-game">You're Bald - Lovable Game</Link>
          </li>
          <li className="project-link">
            <Link href="/projects/webpage-note-taker">Webpage Note Taker</Link>
          </li>
          <li className="project-link">
            <Link href="/projects/url-param-splitter">URL Parameter Splitter</Link>
          </li><
            li className="project-link">
            <Link href="/projects/nascar-analysis">NASCAR Analysis</Link>
          </li>
        </ul>
      </navigation>
    </>
  );
}
