// pages/projects/url-param-splitter.js
import Head from 'next/head';
import Link from 'next/link';


export default function UrlParamSplitter() {
  return (
    <>
      <nav>
        <Link href="/projects">← Back to Projects</Link>
      </nav>

      <Head>
        <title>Cindy Yen - You're Bald</title>
        <meta
          name="description"
          content="Cindy Yen's You're Bald Lovable Game"
        />
      </Head>
      <section className="project-header">
        <h2>You're Bald - A Game Made on Lovable</h2>
      </section>

      <article>
        <p>
          I made a game on <Link href="https://www.lovable.dev" target="_blank">Lovable</Link>.
          The object of the game is to shave everyone's head and make them bald.
          The game was created through "vibe coding" - essentially, I just told the AI what I wanted to build and it made it for me (after lots of prompting trial and error).
        </p>

        <p>
          Play it below or at <Link href="https://yourebald.lovable.app">https://yourebald.lovable.app</Link>.
        </p>

        <iframe src="https://yourebald.lovable.app" width="100%" height="800px" frameborder="0"></iframe>

        <section>
          <h3>More On Development</h3>
          <p>The idea for this game started as an inside joke.</p>
          <p>The first iteration of the game was endless levels of faces with various hairstyles that you had to shave bald. However, that started to feel stale.
            Soon, I prompted Lovable to create levels with varying challenges - spinning heads, moving heads, and a screen that occassionally blacks out and prevents you from seeing the head. This eventually became 100 levels with scaled difficulty.</p>
          <p>I also had to prompt Lovable to create the menu options - a pause button, an option to retry the level, and the main menu. The main menu took the most prompting due to having to update the level selection screen everytime I added a new category of levels, since that screen is color coded and has a category name for each level type.</p>
          <p>Getting the right sound effects was something I had the most trouble prompting. At first I wanted music to play, but I couldn't prompt Lovable into creating the correct vibe of music that I wanted. So instead, I settled for only sound effects, including a noise when you hit the eyes and a voice that yells "BALD!" at the end of each level. </p>
          <p>I hope you enjoy the game!</p>
        </section>
        <br></br>
      </article>
    </>
  );
}
