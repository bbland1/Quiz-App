import React from "react";
import NavBar from "./NavBar";
import HomeTitle from "./HomeTitle";

function Home(){
  return (
    <div>
      <header>
        <NavBar />
        <div className="header-title">
          <h1><HomeTitle/></h1>
          <h3>Out lovely title up there is just some of the dumb things thrown at a manga or anime that even blinks an eye at not </h3>
        </div>
      </header>
    </div>
  );
}

export default Home;