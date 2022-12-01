import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import QuizLogic from "./QuizLogic";

function Quiz() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="main-part">
        <h1 className="header-title">Is it a Shoujo?</h1>
        <h3>Can you actually tell the demographic just by looking at a picture and reading the summary?</h3>
        <QuizLogic />
      </main>
      <Footer />
    </div>
  );
}

export default Quiz;