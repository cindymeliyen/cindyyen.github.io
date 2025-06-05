// pages/analytics/nascar-analysis.js
import Head from 'next/head';
import Link from 'next/link';


export default function UrlParamSplitter() {
  return (
    <>
      <nav>
        <Link href="/projects">← Back to Projects</Link>
      </nav>

      {/* Project title/header */}
      <section className="project-header">
        <h2>NASCAR Analysis</h2>
      </section>

      <article>
        <p>
          NASCAR is my favorite sport. I've been blessed to be able to work on some projects in the past and I continue to occasionally post NASCAR TV viewership analysis on <Link href="https://twitter.com/cindymeliyen" target="_blank">Twitter</Link> for almost 2,000 fans and industry members.
        </p>
        <p>
          The following is some of my "greatest hits" analyses and research. Please note that some of these projects are a few years old but I'm still proud of them.
        </p>

        <section>
        <h3>Data Analysis</h3>
          <p>
            <li><b><Link href="https://x.com/cindymeliyen/status/1729547465378914597" target="_blank">Analysis of Chase Elliott Effect</Link></b> - Chase Elliott is NASCAR's most popular driver. How much was viewership affected when he was out with an injury for a few weeks? </li>
            <li><b><Link href="https://x.com/cindymeliyen/status/1927885077238706299" target="_blank">NASCAR on Prime First Race Analysis</Link></b> - NASCAR had their first race exclusively on streaming for one of their biggest races of the year, the World 600. This analysis explores how it performed. </li>
            <li><b><Link href="https://public.tableau.com/app/profile/cindymeliyen/" target="_blank">NASCAR Viewership Tableau Dashboards</Link></b> - I use Tableau dashboards regularly in my day job but this is a link to some dashboards that I've made as examples. One shows off Tableau features and the other is a more practical dashboard that shows the graphs I regularly screenshot for my Twitter analysis. </li>
          </p>
        </section>

        <section>
        <h3>Research Reports</h3>
          <p>
            <li><b><Link href="https://nascarthesis.wordpress.com/" target="_blank">NASCAR Perceptions</Link></b> - This was my senior thesis for undergrad, in which I explored perceptions of NASCAR and how they affect fandom. </li>
            <li><b><Link href="https://x.com/cindymeliyen/status/1504232466516643843" target="_blank">What Do NASCAR Fans Do During Commercial Breaks?</Link></b> - I asked NASCAR fans what they do during commercial breaks because I had a hypothesis that average viewership is lower than it could be because people change the channel during ad breaks, and that ads would be more effective side-by-side with live racing action because people don't pay attention during full-screen ads. Funny enough broadcasters are now pushing more for side-by-side ad breaks during green flag racing. </li>
          </p>
        </section>
        <br></br>
      </article>
    </>
  );
}
