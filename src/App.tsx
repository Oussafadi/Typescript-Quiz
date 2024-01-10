import { EventHandler, FormEventHandler, useState } from 'react'
import './App.css'
import ScoreComponent from './components/ScoreComponent';
import QuizForm from './components/QuizForm';

export type Question = {
  question :string,
  answer: string,
  options : string[],
}

const questions : Question[] =
[{
  question : "Capital of Morocco ?",
  answer: "Rabat",
  options : [
    'Rabat',
    'Casablanca',
    'Marrakech'
  ]
},
{
  question : "Capital of France ?",
  answer: "Paris",
  options : [
    'Paris',
    'Toulouse',
    'Montpellier'
  ]
},
{
  question : "Capital of the USA ?",
  answer: "Washignton",
  options : [
    'California',
    'Ottawa',
    'Washignton'
  ]
}
]

function App() {
 const [currentQuestionNumber,setCurrentQuestionNumber] = useState<number>(0);
 const [answer,setAnswer] = useState<string>('');
 const [score,setScore ] = useState<number>(0);
 const [message,setMessage] = useState<string>('');
 
 const isGameOver = currentQuestionNumber>= questions.length;

 // Computed Values
 const currentQuestion =questions[currentQuestionNumber];
 

const handleSubmit = (e : any) => {
   e.preventDefault();
   
    if (answer === currentQuestion.answer) {
      setScore((score) => score +1);
      
    }
    setCurrentQuestionNumber((currentQuestionNumber) => currentQuestionNumber +1) ;
  
}

const handleReset = () => {
  setCurrentQuestionNumber(0);
  setScore(0);
  setAnswer('');
}


  return (
    <>
    { isGameOver ? 
    (
      <ScoreComponent score={score} totalQuestions={questions.length}
       reset={handleReset} />
    )
    :
    (
     <QuizForm setAnswer={setAnswer} currentQuestion={currentQuestion} answer={answer} submit={handleSubmit} />
    )
    }
      
    
    </>
  )
}

export default App
