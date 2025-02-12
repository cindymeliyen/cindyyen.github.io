// pages/product/webpage-note-taker.js
import Head from 'next/head';
import Link from 'next/link';

export default function WebpageNoteTaker() {
  return (
    <>
      <Head>
        <title>Webpage Note Taker - Cindy Yen</title>
        <meta
          name="description"
          content="Product: Webpage Note Taker by Cindy Yen"
        />
      </Head>
      <div className="container">
        {/* Header matching the homepage */}
        <header className="site-header">
          <h1>Cindy Yen</h1>
          <p>Product and Data-Driven Growth</p>
        </header>

        {/* Navigation link to go back to home */}
        <nav className="back-nav">
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </nav>

        <main>
          {/* Project title/header */}
          <section className="project-header">
            <h2>Webpage Note Taker</h2>
            <p className="date">Cindy Portfolio — February 11, 2025</p>
          </section>

          <article>
            <p>
              I created a Webpage Note Taker Chrome extension using Google Gemini and
              some personal knowledge of HTML. The Webpage Note Taker was originally
              designed to be used on LinkedIn, where you can take notes about a
              connection and be able to easily refer back to your notes in the future.
            </p>

            <section>
              <h3>The Problem</h3>
              <p>
                I have a lot of LinkedIn connections. Some people I have worked with,
                some I have met at a networking event, and others are random recruiters.
                As an MBA student, I know I should utilize my network, but it is hard to
                reach out to someone when you’ve forgotten how you met them. LinkedIn
                doesn’t have an internal way to take notes and I don’t have time to keep
                an Excel or written notebook full of notes about people I have connected
                with. There had to be an easier way.
              </p>
            </section>

            <section>
              <h3>Prototyping</h3>
              <p>
                I went into Figma and tried to brainstorm what this product would look
                like. I knew that the product should allow me to take notes about a
                profile and show me the date the note was written. I also wanted to be
                able to see all the notes I have written in the page. I came up with a
                design, which you can see here.
              </p>
            </section>

            <section>
              <h3>Development</h3>
              <p>
                I looked to see if there was a way I could make a profile notetaker
                specifically for LinkedIn. However, it seems to be against LinkedIn’s
                terms of service to create an extension that manipulates the UI of the
                website. So, I had to find another solution. I decided that I could
                make a Chrome extension that lets you take notes on any webpage, with the
                intention that it would be primarily used for LinkedIn.
              </p>
              <p>
                I used Google Gemini to generate the code for the extension and some
                knowledge of HTML to make some tweaks to the UI.
              </p>
            </section>

            <section>
              <h3>Additional Features &amp; Considerations</h3>
              <p>
                Throughout the process, I realized there might be some problems that
                come up because it is a private extension. Due to this, I added extra
                features to the extension:
              </p>
              <p>
                <strong>How to save notes without a cloud database:</strong> Since this
                is just a small Chrome extension for personal use, I had to come up with
                a free way to make sure that entered text wouldn’t get lost. I didn’t
                want people to have to create an account, so I made the design choice to
                have the information saved to your Chrome profile. As I kept testing the
                extension—which involved having to reupload the extension file to Chrome
                every time—I realized that a user would be at risk of losing all their
                notes if they had to redownload the extension. So, I created an option
                where you could download all the note data you currently have into a CSV.
                Then I created an option to upload that same note data and have all your
                existing notes available whenever you visited a website that you had
                previously taken notes on. This upload feature also worked if you had a
                mass list of URLs to take notes about and didn’t want to visit each URL to
                add your notes.
              </p>
              <p>
                Unfortunately, this extension will never have enough features to use it
                reliably for its original purpose. A user can change their LinkedIn
                profile URL at any time. If this were to happen, you would not be able
                to use your notes for that profile, since the notes are attached at the
                URL level. The only way for this to work on LinkedIn would be to attach
                the notes to a profile_id, which you cannot do without accessing LinkedIn’s
                API or backend.
              </p>
            </section>

            <section>
              <h3>The Result</h3>
              <p>
                I was able to make a private Chrome Extension that allows you to take
                notes about a webpage you’re on. The end result can be seen on my
                LinkedIn. The code can be found on my GitHub.
              </p>
            </section>
          </article>
        </main>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 1rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .site-header {
          text-align: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: linear-gradient(135deg, #0070f3, #66a6ff);
          color: #fff;
          border-radius: 8px;
        }
        .site-header h1 {
          margin: 0;
          font-size: 3rem;
        }
        nav.back-nav {
          text-align: center;
          margin: 1rem 0;
        }
        nav.back-nav a {
          color: #0070f3;
          font-weight: bold;
          text-decoration: none;
        }
        nav.back-nav a:hover {
          text-decoration: underline;
        }
        .project-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .project-header h2 {
          margin: 0;
          font-size: 2.5rem;
          color: #0070f3;
        }
        .date {
          font-size: 0.9rem;
          color: #555;
          margin-top: 0.5rem;
        }
        main article p {
          line-height: 1.6;
          margin-bottom: 1rem;
          color: #333;
        }
        main section {
          margin-bottom: 1.5rem;
        }
        main section h3 {
          margin-bottom: 0.5rem;
          color: #0070f3;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
      `}</style>
    </>
  );
}
