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
        <h1>Do you actually Shoujo?</h1>
      </header>
      <main>
        {startGame ? (<QuizLogic />) : (<GameStart onStart={onStart}/>)}
      </main>
    </div>
  );
}

export default Quiz;