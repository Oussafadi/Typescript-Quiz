
function ScoreComponent({score,totalQuestions,reset} : {score:number ,totalQuestions : number , reset : () => void ;}) {
    return (
      <>
         { score == totalQuestions ?  
         (
            <h2> Congratualtions you won </h2>
         ) 
            :
           (
            <h2>  You got {totalQuestions-score}  wrong </h2>
             )
         }
        <button onClick={reset}> Replay</button>
        </>
    )
  }

  export default ScoreComponent