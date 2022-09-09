import React, { useState } from "react";
import NavBar from "../NavBar";
import questions from "./QuizQuestions";

function Quiz() {
  // State Properites of the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  // giviing functionality
  function handleAnswerClick(isCorrect) {
    console.log(isCorrect)

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowFinalScore(true);
    }
  }

  function handleRestart() {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalScore(false);
  }

  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Do you actually Shoujo?</h1>
      </header>
      <main>
        {showFinalScore ? (
          <div className="final-score">
            <h2>Seems you do know Shoujo</h2>
            <h3>You got {score} out of {questions.length} correct! {(score / questions.length) * 100}%</h3>
            <button onClick={() => handleRestart()}>Restart</button>
          </div>
        ) : (
          <div className="question-card">
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
            <h3 className="question-text">{questions[currentQuestion].questionText}</h3>

            <div className="answer-text">
              <ul>
                {questions[currentQuestion].answersOptions.map((answerOption) => {
                  return (<button
                    key={answerOption.id}
                    onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>)
                })}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Quiz;