import React from "react";
import NavBar from "./NavBar";
import HomeTitle from "./HomeTitle";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1><HomeTitle /></h1>
      </header>
      <main>
        <h3>blah blah blah</h3>
        <button><Link to="/quiz">Start the quiz</Link></button>
      </main>
    </div>
  );
}

export default Home;