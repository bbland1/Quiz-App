import React, { useState } from "react";
import questions from "./QuizQuestions";
import "./quiz.css"

function QuizLogic() {
  // State Properties of the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  // giving functionality
  function handleAnswerClick(isCorrect) {

    if (isCorrect) {
      setScore(score + questions[currentQuestion].questionValue);
    }
    console.log(score)

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

  function goBack() {
    if (score > 0) {
      setScore(score - 1);
    }

    const previousQuestion = currentQuestion - 1;

    if (previousQuestion <= questions.length || previousQuestion > 0) {
      setCurrentQuestion(previousQuestion);
    }
  }

  return (
    <div>
      {
        showFinalScore ? (
          <div className="question-card func-button">
            <h2>Seems you do know Shoujo</h2>
            <h3>You got {score} out of {questions.length} correct! {Math.round((score / questions.length) * 100)}%</h3>
            <button onClick={() => handleRestart()}>Restart</button>
          </div>
        ) : (
          <div className="question-card func-button">
            {currentQuestion !== 0 && <button onClick={() => goBack()} className="direction">Back</button>}
            {currentQuestion !== 0 && <h3 className="direction">Score: {score}/{questions.length}</h3>}
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
            <div className="question-info">
            <h2 className="question-text">{questions[currentQuestion].questionText}</h2>
              {questions[currentQuestion].question_img !== null && <img src={questions[currentQuestion].question_img} alt={questions[currentQuestion].img_alt} className="question-img" />}
              {questions[currentQuestion].question_description !== null && <p className="synopsis"><em>{questions[currentQuestion].question_description}</em></p>}
            </div>
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