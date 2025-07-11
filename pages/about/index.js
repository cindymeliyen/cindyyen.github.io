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
          Hi, I&#39;m Cindy. I&#39;m currently looking to pivot into a <b>growth product manager</b> or <b>product operations manager</b> role in tech. I recently completed my MBA at UCLA and I have 5+ years of experience in analytics. I am located in Los Angeles but am open to relocating to another major city.
        </p>

        <p>I put together this quick FAQ so you can get to know me better.</p>

        <section>
          <h3>Tell Me About Yourself</h3>
          <p>
            My professional journey started with being a business intelligence analyst for various ad tech and media companies. As I grew in this role, I realized two things - I wanted to make more of an impact and help drive business decisions to make customers happy, and the career path for a data analyst was not interesting to me. So, I enrolled in business school to help me pivot to a product role.
          </p>
          <p>
            Through my last few jobs and the experiences I&#39;ve had in business school, I&#39;ve found that I enjoy working on projects related to growth - specifically customer acquisition and retention - and optimizing operational flows to improve efficiency. Therefore, I am pursuing growth product manager and product operations manager roles. I feel that these roles play to my strengths and that I would be best at them, but I am also open to general product manager and product marketing manager roles.
          </p>
          <p>
            I find that I work best in smaller companies that allow me to grow and perform a variety of tasks. In 5 years, I hope to be in a place where I can mentor colleagues and watch them grow. My previous managers have praised me for my curiosity and high quality of work.
          </p>
        </section>

        <section>
          <h3>What&#39;s Your Skillset?</h3>
          <p>
            I have picked up various skills and tools in my many jobs, which sets me up to be well-rounded and ready for whatever is thrown as me. I am confident that I can learn any missing skills on the job as I am a quick learner.</p>
          <p>
            <li><i>Analytics:</i> SQL, Tableau, Surveys (Qualtrics), Excel, Google Analytics, A/B Testing, Python</li>
            <li><i>Growth Marketing:</i> Google Ads, Email Marketing (MailChimp, SendGrid), HTML</li>
            <li><i>Product and Project Management:</i> APIs, Segment, Jira, Github, Figma, Agile</li>
          </p>
        </section>

        <section>
          <h3>Tell Me Your Biggest Accomplishment</h3>
          <p>
            I think accomplishments come in all forms - when I made an impact, when I hit a goal, and when I accomplished something I didn&#39;t think I could do. Here&#39;s an example of each one of them:</p>
          <p>
            <li>In my first job, I was straight out of college and the only analyst on the team. Our existing product team had chosen a business intelligence tool for the media buying and client services teams to use, but it was not meeting their needs. So, <b>I took it upon myself to find a new business intelligence tool</b> that the analysts could use to build better reports for the media buying and client serices teams. I evaluated half a dozen business intelligence tools, demoing each one and making sure the tools were able to build the reports that my stakeholders needed. I ended up choosing Tableau and implementing it for everyone in the company. </li>
            <li>At another job, my manager was out for the day but his boss really wanted to send out an email to our customers. My manager had briefly showed me how to do so earlier in the week, but it was more of a &#34;take a look at what I&#39;m doing&#34; kind of thing. Still, I knew how important it was to send that email out to our customers that day, so I had to figure out how to use MailChimp to send it out. I was able to figure out how to set it up, and because I did a great job, <b>I got put in charge of email marketing</b> and thus was now the lead to hit the company&#39;s quarterly email acquisition KPI. The goal for that quarter was 10,000 new customers, and I had to get 7,000 more. I spent the rest of the quarter A/B testing various email copy and learning how to code in HTML to explore new formats. At the end of the quarter, <b>we ended up exceeding our goal with 11,000 total new customers</b>.</li>
            <li>In business school, I was really struggling with my accounting class. I just did not understand the balance sheet and when things could be moved over from one side to the other. However, I knew that if I wanted to do well in the class, I had to understand the material. So, I doubled down on studying and went to office hours. I ended up getting 100% on my midterm.</li>
          </p>
        </section>

        <section>
          <h3>What are some things you&#39;re interested in?</h3>
          <p>
            I spend a lot of time on social media because I like learning about what people think about different problems, whether it&#39;s complaining about the boringness of a sporting event or their thoughts on a new proposed government policy. I enjoy reading these comments and then thinking of solutions that would solve their problems.
          </p>
          <p>
            Another thing I enjoy is NASCAR. I enjoy the strategy of the races and the storytelling that unfolds throughout the races. Over the last few years I&#39;ve performed viewership analysis on <Link href="https://twitter.com/cindymeliyen" target="_blank">Twitter</Link> for almost 2,000 NASCAR fans and industry members.
          </p>
          <p>
            Outside of this I enjoy playing Nintendo games. I&#39;m a big Animal Crossing fan, since 2006, and I hold the strong belief that Animal Crossing: New Leaf for the 3DS is better than Animal Crossing: New Horizons for the Nintendo Switch.
          </p>
        </section>

        <section>
          <h3>I&#39;m interested. How do I contact you?</h3>
          <p>
            <li><b>LinkedIn</b>: <Link href="https://linkedin.com/in/cindy-yen" target="_blank">linkedin.com/in/cindy-yen</Link> (Send a message with your invite so I don&#39;t decline it.)</li>
            <li><b>Email</b>: <a href="mailto:cindymeliyen@gmail.com" target="_blank">cindymeliyen@gmail.com</a></li>
            <li><b>Twitter</b>: <Link href="https://twitter.com/cindymeliyen" target="_blank">@cindymeliyen</Link></li>
            My resume is updated frequently. Please contact me for the most updated version.
          </p>
        </section>
        <br></br>
      </article>
    </>
  );
}
