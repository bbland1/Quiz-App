import React, { useState } from "react";
import NavBar from "../NavBar";
import questions from "./QuizQuestions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswerClick(event, answer){
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      console.log(event.target.value)
      // setCurrentQuestion(nextQuestion);
    } else {
      alert("end of the quiz")
    }
    
  }

  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Do you actually Shoujo?</h1>
      </header>
      <main>
        <div>
          Score
        </div>
        <div className="question">
          <div className="question-number">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answers">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button 
            key={index} 
            id={index}
            value={answer.answerText}
            onClick={handleAnswerClick}>{answer.answerText}</button>
        ))}
        </div>
      </main>
    </div>
  );
}

export default Quiz;