import Head from 'next/head';
import Link from 'next/link';
// Make sure this path correctly points to wherever you saved the ChatSection component!
import ChatSection from '../../components/ChatSection'; 

export default function CindyBot() {
  return (
    <>
      <nav className="p-4 max-w-4xl mx-auto">
        <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
          ← Back to Home
        </Link>
      </nav>
      
      <Head>
        <title>Cindy Yen - CindyBot</title>
        <meta
          name="description"
          content="CindyBot - Learn About Cindy"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
        <section className="project-header text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            CindyBot
          </h2>
          <p className="mt-2 text-md text-slate-600">
            I find it hard to explain everything about my professional life in my one-page resume.
            So I made CindyBot, an AI assistant, which can explain things in more detail.
            If you want to learn more about the bot, check it out <Link href="/projects/cindybot-project">here</Link>.
          </p>
        </section>

        {/* The Chat box container embedded seamlessly into your page structure */}
        <section className="max-w-2xl mx-auto border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <ChatSection />
        </section>
      </main>
      <br></br>

      <p><i>Note: CindyBot runs off a free version of Gemini API. If you get an error about "having trouble communicating with the API," please wait a few seconds and try again.</i></p>
              <br></br>
    </>
  );
}