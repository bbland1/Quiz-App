import React from "react";

function GameStart(props) {
  // passing props from the quiz page to change the state handled there to have a start button for the quiz
  return (
    <div className="func-button question-card">
      <h2>Press START to begin the Quiz</h2>
      <button onClick={() => props.onStart()}>Start</button>
    </div>
  );
}

export default GameStart;