import React from "react";
import NavBar from "./NavBar";
import HomeTitle from "./HomeTitle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1><HomeTitle /></h1>
      </header>
      <main className="main-part">
        <h2>What is Shoujo?</h2>
        <p>Shoujo is a demographic of anime and manga. It means young girl, so it would typically mean that it is anime or manga that is marketed towards young girls, usually 8 - 19 years old. These manga usually are published in a magazine that are considered a shoujo magazine. This a pretty simple definition that doesn't really focus on the content of the anime or manga just who it is marketed to. These means that shoujo can a variety of genres like action, fantasy, romance, horror and more.</p>

        <p>Shoujo often gets dictated as anything that is slice of life or romance. Some people will see anything that has a girl and she is falling in love and go it is shoujo. The thing is romance is a genre and anyone can enjoy it, and any of the demographics in animanga can have it. </p>
        <h2>Why this site?</h2>
        <p>This site was mostly just made for fun. A why not, a how can I push the skills I have with something else I really enjoy. I love manga and anime, and I'd like to think that I keep the demographics and genres I enjoy pretty diverse. When getting into the various anime and manga I enjoy, I noticed that Shoujo and Josei <em>(the 2 demographics geared towards women)</em> were often getting downplayed or missed entirely for their male counter parts. This sucked to me because the stories in Shoujo and Josei are just as amazing and they deserve to be seen and read.</p>

        <p>As I was on social media in the animanga realm it seems pretty prevalent that there are a lot ideas that Shoujo can't be more than romance. Shows that were in fact Shounen were labeled as Shoujo seeming to be just because it had people falling in love. Following creators that focus their efforts on the Shoujo and Josei space was awesome and it allows me to constantly have more than just the "mainstream" shown to me.</p>

        <p>On this site there is fun quiz that will just see if you can pick the Shoujo. Nothing more and nothing serious, there is a few things listed in the resources pages that sparked the idea and helped with making of the whole thing. Click the button below to head to the quiz page and see if you know the Shoujo.</p>
        <Link to="/quiz" className="func-button"><button>Start the quiz</button></Link>
      </main>
    </div>
  );
}

export default Home;