import React from 'react'

const Buttons = (props) => {
    let button;
        switch (props.answerIsCorrect) {
            case true:
                button =
                <button className = "btn center-block game_button btn-success"> 
                    <i className = "fa fa-check"></i>
                </button>
                break;

            case false:
                button =
                <button className = "btn center-block game_button btn-danger"> 
                    <i className = "fa fa-times"></i> 
                </button>
                break;    
        
            default:
                button =
                <button onClick = {props.checkAnswer} className = "btn center-block game_button" disabled = {props.selectedNumbers.length === 0}> 
                = 
                </button>
                break;
        }
    return (
        <div>
        <hr/>    
            {button}
        </div>
    )
}
export default Buttons