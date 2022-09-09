import React from "react";
import NavBar from "./NavBar";
import HomeTitle from "./HomeTitle";

function Home() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1><HomeTitle /></h1>
      </header>
      <main>
        <h3>blah blah blah</h3>
      </main>
    </div>
  );
}

export default Home;