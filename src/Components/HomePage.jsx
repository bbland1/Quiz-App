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
        <h2>Why this site?</h2>
        <button className="func-button"><Link to="/quiz" className="func-button">Start the quiz</Link></button>
        <button className="func-button">Start the quiz</button>
      </main>
    </div>
  );
}

export default Home;