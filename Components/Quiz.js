import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData.js';
import QuizResult from './QuizResult.js';
function Quiz(){
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
                setShowResult(true);
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer)
        {
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setClickedOption(0);
    }
  return(
    <div>
        <p className='heading-txt'>Quiz App</p>
        <div className='container'>
            {showResult ? 
            (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
            ):(
                <>
                <div className='question'>
                
                    <span id='question_number'>{currentQuestion+1}.</span>
                    <span id='question_txt'>{QuizData[currentQuestion].question}</span>


            </div>
            <div className='option_container'>
            { QuizData[currentQuestion].options.map((option,index)=>{
                    return (
                        <button className={`option-btn ${clickedOption === index+1 ?"checked":null}`} key={index}
                        onClick={()=>setClickedOption(index+1)}
                        >
                              {option}      
                        </button>
                    )
            })
        }
            
            </div>
            <input type="button" value="Next" id='button_nxt' onClick={changeQuestion}/></>

            )
            }
         
        </div>

    </div>
  )
}

export default Quiz;