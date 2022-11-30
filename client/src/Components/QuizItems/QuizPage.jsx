import React from "react";
import Footer from "../Footer/Footer";
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
        <h3>Can you actually tell the demographic just by looking at a picture and reading the summary?</h3>
        <QuizLogic />
      </main>
      <Footer />
    </div>
  );
}

export default Quiz;