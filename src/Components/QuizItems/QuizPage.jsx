import React, { useState } from "react";
import NavBar from "../NavBar";
import QuizLogic from "./QuizLogic";
import GameStart from "./StartPage";

function Quiz() {
  // State Properties of the quiz
  const [startGame, setStartGame] = useState(false);

  function onStart(){
    setStartGame(true);
  }

  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Is it a Shoujo?</h1>
      </header>
      <main className="main-part">
        {startGame ? (<QuizLogic />) : (<GameStart onStart={onStart}/>)}
      </main>
    </div>
  );
}

export default Quiz;