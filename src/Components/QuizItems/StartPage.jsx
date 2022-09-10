import React from "react";

function GameStart(props) {
  // passing props from the quiz page to change the state handled there to have a start button for the quiz
  return (
    <div className="final-score">
      <h2>Press the button to start the Quiz</h2>
      <button onClick={() => props.onStart()}>Start</button>
    </div>
  );
}

export default GameStart;