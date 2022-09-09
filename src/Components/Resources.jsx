import React from "react";
import NavBar from "./NavBar";
import './recources.css';

function Resources() {
  return (
    <div>
      <NavBar />
      <h1>Resources</h1>
      <h2>Where the idea started and the info was got</h2>

      <h3>Colleen's Manga Recs Video</h3>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/169rKJBBc98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Resources;