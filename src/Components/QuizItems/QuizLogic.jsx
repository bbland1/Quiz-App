import React, { useState } from "react";
import questions from "./QuizQuestions";

function QuizLogic() {
  // State Properties of the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  // giving functionality
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
      {
        showFinalScore ? (
          <div className="final-score" >
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
        )
      }
    </div>
  )
}

export default QuizLogic;