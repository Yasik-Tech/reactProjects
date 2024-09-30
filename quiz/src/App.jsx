import { useEffect, useState } from 'react'
import './App.css'
import QusData from './data.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleAnswerClicked = (selectedOption) => {
    if (selectedOption === QusData[currentQuestion].correctAnswer) {
      setScore((preScore) => preScore + 1);
    }
    if (currentQuestion < QusData.length - 1) {
      setCurrentQuestion((preQus) => preQus + 1)
      setTimer(10);
    } else {
      setShowScore(true);
    }
  }

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
       setTimer((preTime) => preTime -1)
       },1000);
      }else{
        clearInterval(interval);
        setShowScore(true);
      }
      return () => clearInterval(interval);

    }, [timer, showScore]);

  const handleResetAll = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  }
  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            <h2>Your score is : {score}/{QusData.length}</h2>
            <button onClick={() => handleResetAll()}>Restart</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{QusData[currentQuestion].question}</p>
            <div className="options">
              {QusData[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClicked(option)}>{option}</button>
              ))}
            </div>
            <div className="timer">Time left : <span>{timer}s</span></div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
