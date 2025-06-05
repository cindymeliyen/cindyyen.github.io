// pages/product/url-param-splitter.js
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
        <h2>URL Parameter Splitter</h2>
      </section>

      <article>
        <p>
          I created a URL Parameter Splitter Chrome extension using Google Gemini and some personal knowledge of HTML. The URL Parameter Splitter is designed to split URL parameters (the stuff after the ? in the URL) and put it in a easy-to-read manner.
        </p>

        <section>
          <h3>The Problem</h3>
          <p>
            While I was working on email marketing campaigns, my manager taught me about URL parameters and how we used to them to track which email brought a customer to our website. He had an app where you could paste a URL into a text editor, press a few buttons, and then all the URL parameters would be split out. Unfortunately the name of that app and the code were lost when we both lost our jobs.</p>
          <p>
            URL parameters can tell you a lot about advertising, and I was also working at a place that utilized URL parameters to track which ad brought a customer to our website. I was looking for a way to easily see the URL parameters broken out without going to another tab and using an external website or having to paste the URL into a text editor. I looked at existing parameter splitters but they either required an external site or did not execute the task in a format that I wanted. Thus, the URL Parameter Splitter was born.
          </p>
        </section>

        <section>
          <h3>Development</h3>
          <p>
            In my mind I had an idea of what I wanted - I wanted it to read the URL of the page I was on and then show the parameters split out in a table-like format. I asked Google Gemini on how to create a Google Extension and to give me some starting code to create my vision. Then, after much trial and error, I was able to get the right Javascript code to be able to get the extension to work in the way I wanted it to. I also used some personal knowledge of HTML to make some tweaks to the formatting.
          </p>
        </section>

        <section>
          <h3>The Result</h3>
          <p>
            I was able to make a private Chrome Extension that when pressed, will show you the URL of the website you&#39;re on and the URL parameters broken out. The code can be found on my <Link href = "https://github.com/cindymeliyen/url-params" target="_blank"> GitHub</Link>.
          </p>
        </section>
        <br></br>
      </article>
    </>
  );
}
