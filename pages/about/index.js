// pages/about/index.js
import Head from 'next/head';
import Link from 'next/link';


export default function AboutCindy() {
  return (
    <>
      <nav>
        <Link href="/">← Back to Home</Link>
      </nav>
      <Head>
        <title>Cindy Yen - About</title>
        <meta
          name="description"
          content="About Cindy Yen"
        />
      </Head>
      <section className="project-header">
        <h2>About Cindy</h2>
      </section>

      <article>
        <p>
          Hi, I&#39;m Cindy. I&#39;m a <b>growth product manager</b> role with previous experience in growth and analytics. I am located in Los Angeles but am open to relocating to another major city.
        </p>

        <p>I put together this quick FAQ so you can get to know me better.</p>

        <section>
          <h3>Tell Me About Yourself</h3>
          <p>
            My professional journey started with being a business intelligence analyst for various ad tech and media companies. As I grew in this role, I realized two things - I wanted to make more of an impact and help drive business decisions to make customers happy, and the career path for a data analyst was not interesting to me. So, I enrolled in business school to help me pivot to a product role.
          </p>
          <p>
            Through my last few jobs and the experiences I&#39;ve had in business school, I&#39;ve found that I enjoy working on projects related to growth - specifically customer acquisition and retention - and optimizing operational flows to improve efficiency. Therefore, I am pursuing growth product manager roles. However, I am open to adjacent roles that will allow me to pursue experimentation and influence the product and marketing strategy.
          </p>
          <p>
            I find that I work best in smaller teams that allow me to grow and perform a variety of tasks. In 5 years, I hope to be in a place where I can mentor colleagues and watch them grow. My previous managers have praised me for my curiosity and high quality of work.
          </p>
        </section>

        <section>
          <h3>What&#39;s Your Skillset?</h3>
          <p>
            I have picked up various skills and tools in my many jobs, which sets me up to be well-rounded and ready for whatever is thrown as me. I am a quick learner and am confident I can fill any missing gaps on-the-job.</p>
          <p>
            <li><i>Product and Project Management:</i> Claude Code, Jira, Github, Figma, Lovable</li>
            <li><i>Analytics:</i> SQL, Tableau, Surveys, Excel, Google Analytics, A/B Testing, Python</li>
            <li><i>Growth Marketing:</i> Google Ads, Meta Ads, Email Marketing, HTML, GA4</li>
          </p>
        </section>

        <section>
          <h3>What are some things you&#39;re interested in?</h3>
          <p>
            I spend a lot of time on social media because I like learning about what people think about different problems, whether it&#39;s complaining about the boringness of a sporting event or their thoughts on a new proposed government policy. I enjoy reading these comments and then thinking of solutions that would solve their problems.
          </p>
          <p>
            Another thing I enjoy is NASCAR. I enjoy the strategy of the races and the storytelling that unfolds throughout the races. I&#39;ve previously performed viewership analysis on <Link href="https://twitter.com/cindymeliyen" target="_blank">Twitter</Link> for almost 2,000 NASCAR fans and industry members.
          </p>
          <p>
            Outside of this I enjoy playing Nintendo games. I&#39;m a big Animal Crossing fan, since 2006, and I hold the strong belief that Animal Crossing: New Leaf for the 3DS is better than Animal Crossing: New Horizons for the Nintendo Switch.
          </p>
          <p>
            I also play tennis for fun.
          </p>
        </section>

        <section>
          <h3>How do I contact you?</h3>
          <p>
            <li><b>LinkedIn</b>: <Link href="https://linkedin.com/in/cindy-yen" target="_blank" rel="noopener noreferrer">linkedin.com/in/cindy-yen</Link> (Send a message with your invite so I don&#39;t decline it.)</li>
            <li><b>Email</b>: <a href="mailto:cindymeliyen@gmail.com" target="_blank" rel="noopener noreferrer">cindymeliyen@gmail.com</a></li>
            <li><b>Twitter</b>: <Link href="https://twitter.com/cindymeliyen" target="_blank" rel="noopener noreferrer">@cindymeliyen</Link></li>
            My resume is updated frequently. Please contact me for the most updated version. For a more detailed career history, please look at my LinkedIn page.
          </p>
        </section>
        <br></br>
      </article>
    </>
  );
}
