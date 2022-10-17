import React from "react";
import NavBar from "./NavBar";

function Links() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Various Links</h1>
      </header>
      <main className="main-part">
        <p>These are just some interesting videos I have watched before and during the making of this site. They aren't meant to change your mind, but I think they have good interesting thoughts on anime, manga and Shoujo specifically.</p>
        <p>Video essays, group interviews or the essays linked below are just some of the vast content out there that takes a critical aspect to anime and manga. While you don't always have to think critically about this media it can be nice to open to seeing the stories as more than just pictures and words.</p>
        <h2>Videos</h2>
        <div className="videos-resources">
          <div className="videos">
            <h3>What is Shoujo Manga?</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/169rKJBBc98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="videos">
            <h3>[EP12] Shojo Manga: The Power and Influence of Girls' Comics</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1mgCCtZ3iaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="videos">
            <h3>Manga Art Theory: Undefined and Overlooked?</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YTHjJaAed8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="videos">
            <h3>Anime Art Theory: SUPERFLAT Explained!</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kaNid-wiGbA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <h3>Some links</h3>
          <ul>
            <li><a href="https://comicsforum.org/2015/03/10/shojo-manga-research-the-legacy-of-women-critics-and-their-gender-based-approach-by-masafumi-monden/#more-3873">Manga Studies #7</a></li>
            <li><a href="https://comicsforum.org/2015/06/11/manga-studies-8-shojo-manga-history-the-obscured-decades-by-dalma-kalovics/">Manga Studies #8</a></li>
            <li><a href="https://mangabrog.wordpress.com/2015/12/14/berserk-artist-kentaro-miura-interview-i-actually-dont-think-i-could-let-such-a-long-grim-story-end-with-a-grim-ending/">mangabrog: Berserk Artist Interview</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Links;