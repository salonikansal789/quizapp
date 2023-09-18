import React from "react";

function QuizResult(props){

    return(
        <>
        <div className="show_result">
            Your Score:{props.score}
            <br/>
            Total Score:{props.totalScore}
        </div>
        <button id="button_nxt" onClick={props.tryAgain}>TRY AGAIN</button>
        </>
    )
}

export default QuizResult;