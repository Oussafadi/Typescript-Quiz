

import {Question} from '../App'

 function QuizForm ({currentQuestion,submit, answer,setAnswer} :
     {currentQuestion : Question , submit : (e : any) => void , answer : string ,setAnswer: any})
 {
    return ( <div className='quiz'>
  <h1 className='question'>
      { currentQuestion.question }
  </h1>
  <form className='form-options' onSubmit={submit}>
  <div >
      {currentQuestion.options.map((o : string) => 
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

export default QuizForm