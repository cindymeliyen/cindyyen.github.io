// pages/about/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function AboutCindy() {
  return (
    <>
      <nav>
          <Link href="/">← Back to Home</Link>
      </nav>

      {/* Project title/header */}
      <section className="project-header">
        <h2>About Cindy</h2>
      </section>

      <article>
        <p>
          Hi, I'm Cindy. I'm currently looking to pivot into a growth product manager or product operations manager role. I recently completed my MBA at UCLA and I have 5+ years of experience in analytics.
        </p>

        <p>I put together this quick FAQ so you can get to know me better.</p>

        <section>
          <h3>Tell Me About Yourself</h3>
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
          <h3>What's Your Skillset?</h3>
          <p>
            I went into Figma and tried to brainstorm what this product would look
            like. I knew that the product should allow me to take notes about a
            profile and show me the date the note was written. I also wanted to be
            able to see all the notes I have written in the page. I came up with a
            design, which you can see here.
          </p>
        </section>

        <section>
          <h3>Tell Me Your Greatest Accomplishment</h3>
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
          <h3>What do you do in your free time?</h3>
          <p>
            Video games ,etc.
          </p>
        </section>

        <section>
          <h3>I'm interested. How do I contact you?</h3>
          <p>
            LinkedIn, Email, Twitter
            My resume is frequently updated. Please contact me for the most updated version.
          </p>
        </section>
      <br></br>
      </article>
    </>
  );
}
