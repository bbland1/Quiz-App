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
        <h3>Out lovely title up there is just some of the dumb things thrown at a manga or anime that even blinks an eye at not </h3>
      </main>
    </div>
  );
}

export default Home;