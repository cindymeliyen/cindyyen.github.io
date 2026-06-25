// pages/projects/cindybot-project.js
import Head from 'next/head';
import Link from 'next/link';


export default function CindyBotProject() {
  return (
    <>
      <nav>
        <Link href="/projects">← Back to Projects</Link>
      </nav>

      <Head>
        <title>Cindy Yen - CindyBot Project</title>
        <meta
          name="description"
          content="CindyBot - AI Chatbot Project"
        />
      </Head>
      <section className="project-header">
        <h2>CindyBot - AI Chatbot</h2>
      </section>

      <article>
        <p>
          I made an AI chatbot that talks about me. This page is about how I made CindyBot.
          If you want to talk to CindyBot, check it out <Link href="/cindybot">here</Link>!
        </p>

        <section>
          <h3>The Idea</h3>
          <p>
            I've had so many experiences that it's hard to fit everyone into a one-page resume.
            So, I decided to make a chatbot so hiring teams can find out more about my experience before they want to reach out for a longer chat.
          </p>
          <p>You can use CindyBot to:</p>
          <p>
            <li>Ask if I am qualified for a pasted job description</li>
            <li>Ask to elaborate more about a job I've had beyond what's on my resume</li>
            <li>And much more!</li>
          </p>
          <p>
            I am also using this chatbot as an excuse to show off my AI skills.
          </p>
        </section>

        <section>
          <h3>Development</h3>
          <p>
            CindyBot was made via vibecoding through Google Gemini! I first told Gemini that I wanted to make a chatbot that talk about me, and Gemini was able to walk me through the requirements and steps.
          </p>
          <p>
            First, I needed to make a markdown (.md) file that an AI would be able to read for context about me. Gemini was able to tell me what directory on my website I needed to put that document in, as well as provided an example template that would be optimized for an AI model. I then filled out the file with my details about my work experience, education, and more.
          </p>
          <p>
            Next, I needed to figure out which AI agent to use. I wanted to use a free one, so Gemini suggested (of course) the Google Gemini API. The next part was how to connect to the API securely. Gemini and I brainstormed many ways, including looking at different AI chatbot software, but we ultimately decided the best course was to build my own chatbot that's embedded on my website. The best way to keep my Gemini API key private would be to host it in Cloudflare. Gemini then provided me with some code to paste into Cloudflare and gave me instructions on how to store my API key.
          </p>
          <p>
            Finally, I had Gemini provide code for the chatbot that I could put on my website. After a few iterations and having to be more specific about exactly what I wanted, I was able to copy and paste the code onto my website.
          </p>
        </section>

        <section>
          <h3>Prompt Engineering</h3>
          <p>
            After I tested a few chats with CindyBot, I realized that I needed to put some guardrails in my markdown file. Some of the things I had to specify in my prompt include:
          </p>
          <p>
            <li><b>Making sure CindyBot only talks about me!</b> I don't want people to abuse my free API credits, so I had to tell CindyBot to always redirect the conversation about me if someone asks an off-topic question. </li>
            <li><b>Telling CindyBot to specifically reference the information I provided. </b> CindyBot was giving out a fake email address even though I had it listed multiple times correctly in my markdown file. I had to throw the hammer down. CindyBot was also saying that I was qualified for jobs that have nothing to do with my current job (like Finance Manager). I had to tell it make sure to consider my experience and add a section about the jobs I am a strong match for.</li>
            <li><b>Referencing the correct Cindy Yen.</b> Fun fact, there's another Cindy Yen that is a famous Taiwanese singer. I had to make sure that she wasn't the correct Cindy Yen.</li>
          </p>
        </section>

        <section>
          <h3>Additional Features &amp; Considerations</h3>
          <p>
            These are some other features that I have built in or considered:
          </p>
          <p>
            <li><strong>Logging conversations:</strong> I want to understand what conversations visitors are having with CindyBot so I can tweak CindyBot to have the most accurate responses. So, I had Gemini tell me how to best track conversations. The solution: add a Discord webhook, where every conversation is sent to a private Discord channel.</li>
            <li><strong>Putting CindyBot in a more prominent spot:</strong> At first, Gemini started vibecoding a pop-up chatbot. I told them I wanted a separate page. I understand that the pop-up would probably get more users, but due to the structure of my site, I think it would be best suited for its own page. However, I will monitor usage and who knows, maybe I'll add a pop-up notification or make CindyBot a pop-up in the future.
            </li></p>
        </section>
        <br></br>
      </article>
    </>
  );
}
