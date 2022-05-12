import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container m-auto p-8 text-light">
      <div id="hero" className="mb-8 p-2 w-full flex flex-wrap bg-charcoal">
        <div className="border-8 border-transparent w-full md:w-1/3 bg-transparent">
          <h1 className="block uppercase text-white">Hello</h1>
        </div>
        <div className="text-white border-8 border-transparent w-full md:w-2/3 bg-transparent">
          <h1 className="uppercase text-xl lg:text-7xl">I'm a software engineer + Interaction Designer</h1>
          <p className="pt-7">
            I have more than a decade of experience specializing in product strategy and rapid prototyping, with a solid background in design. I especially enjoy designing novel interaction patterns, agile teams, and meaningful work with nonprofits.
          </p>
          <p className="pt-7">
            I'm very intersted in Startups, Healthcare, Storytelling and Data Visualization, Machine Learning, Accessibility, Traveling, Foreign Languages (Russian, German, Italian, Latin), Raspberry Pi and Painting.
          </p>
          <p className="pt-7">
            <a className="underline" href="/books">See what I'm currently reading.</a>
          </p>

        </div>
      </div>

      <div id="work" className="mb-8 p-2 w-full flex flex-wrap bg-charcoal">
        <div className="border-8 border-transparent w-full md:w-1/3 bg-transparent">
          <h1 className="block uppercase text-white">Work</h1>
        </div>
        <div className="text-white border-8 border-transparent w-full md:w-2/3 bg-transparent">
          <details>
            <summary className="uppercase">Medseal</summary>
            <p className="ml-7">MedSeal's game-changing AutofillAI™ streamlines medical forms for patients and doctors alike.</p>
          </details>
          <details>
            <summary className="uppercase">Google Crowdsource</summary>
            <p className="ml-7">Crowdsource brings diverse data and model testing to ML efforts at Google through crowdsourcing. We believe, and millions of our users around the world agree, that if our products need to be inclusive, they cannot be just built by Google in isolation - the global user community is a participant in the effort to make products excel for everybody. 🌏</p>
          </details>
          <details>
            <summary className="uppercase">Google Chatbase</summary>
            <p className="ml-7">
              Chatbase is Google Analytics for chatbots. The service helps bot developers optimize key metrics by prioritizing broken dialog experiences. Chatbase began as an Area 120 incubator startup that uses Google ML and search capabilities to analyze hundreds of thousands of live-chat logs to uncover far more use cases and training phrases. Chatbase was acquired in 2019, and is now part of Google Cloud AI.
              Chatbase was a new product that we built from the ground up. I was engaged in both engineering and product development.
            </p>
          </details>
          <details>
            <summary className="uppercase">YouTube</summary>
            <p className="ml-7">
              The Kabuki app is an HTML5 Youtube app that runs on over 2k different kinds of devices including: smart TVs, set top boxes (Roku, AppleTV) and game consoles (Wii, PS4, Xbox).
            </p>
          </details>
          <details>
            <summary className="uppercase">Wildfire Interactive</summary>
            <p className="ml-7">
              Wildfire was a suite of six social media marketing apps built in Ruby on Rails, and used by the fortune 50 companies to track and engage their social media pages, promotions, contests and analytics.
            </p>
          </details>
        </div>
      </div>

      <div id="social" className="mb-8 p-2 w-full flex flex-wrap bg-charcoal">
        <div className="border-8 border-transparent w-full md:w-1/3 bg-transparent">
          <h1 className="block uppercase text-white">Follow me</h1>
        </div>
        <div className="text-white border-8 border-transparent w-full md:w-2/3 bg-transparent">
            <p className="uppercase">
              <a className="" href="https://github.com/stayce">Github</a>
            </p>
            <p className="uppercase">
              <a className="" href="https://twitter.com/stayce">twitter</a>
            </p>
            <p className="uppercase">
              <a className="" href="https://www.linkedin.com/in/stayce/">linkedin</a>
            </p>
            <p className="uppercase">
              <a className="" href="https://www.duolingo.com/profile/hellohowsitgoing">duolingo</a>
            </p>
        </div>
      </div>

      <div id="contact" className="mb-8 p-2 w-full flex flex-wrap bg-charcoal">
        <div className="border-8 border-transparent w-full md:w-1/3 bg-transparent">
          <h1 className="block uppercase text-white">Contact</h1>
        </div>
        <p className="text-white border-8 border-transparent w-full md:w-2/3 bg-transparent">
          If you are interested in my work, please feel free to contact me at
          <a href="mailto:hello@mystayce.com"> hello@mystayce.com </a> and tell me about you and your project.
        </p>
      </div>


    </div>

  );
}
