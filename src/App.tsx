import { EventHandler, FormEventHandler, useState } from 'react'
import './App.css'

type Question = {
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
 const wrongAnswers = questions.length - score ;
 

const handleSubmit = (e : any) => {
   e.preventDefault();
   
    if (answer === currentQuestion.answer) {
      setScore((score) => score +1);
      if(score == questions.length) {
        setMessage("Congratualtion you won");
      }
    }
    setCurrentQuestionNumber((currentQuestionNumber) => currentQuestionNumber +1) ;

    
}

function Quiz() {
 return ( <div className='quiz'>
  <h1 className='question'>
      { currentQuestion.question }
  </h1>
  <form className='form-options' onSubmit={handleSubmit}>
  <div >
      {currentQuestion.options.map(o => 
        (
          <div className='options'  key={o}>
          <input type='radio' onChange={() => {setAnswer(o)}} value={o} name='answer' checked={o == answer }>
          </input>
          {o}
          </div>
        ))}
  </div>
  <button>Submit Answer</button>
  </form>
</div>
 )
}

function ScoreComponent() {
  return (
    <>
       { score == questions.length ?  
       (
          <h2> {message} </h2>
       ) 
          :
         (
          <h2>  You got {wrongAnswers}  wrong </h2>
           )
       }
      
      </>
  )
}

  return (
    <>
    { isGameOver ? 
    (
      <ScoreComponent/>
    )
    :
    (
     <Quiz/>
    )
    }
      
    
    </>
  )
}

export default App
