import React from "react";
import NavBar from "../NavBar/NavBar";
import QuizLogic from "./QuizLogic";

function Quiz() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Is it a Shoujo?</h1>
      </header>
      <main className="main-part">
        <QuizLogic />
      </main>
    </div>
  );
}

export default Quiz;