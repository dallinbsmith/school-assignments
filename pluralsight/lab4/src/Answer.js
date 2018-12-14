import React from 'react'

const Answer = (props) => {
    return (
        <div>
            <hr/>
            <div className = "text-center p-3">
            {props.selectedNumbers.map((number, i) => <span className = "numberSelect"
                key = {i}
                onClick = {() => props.unselectTheNumber(number)}
            >{number}</span>)}
            </div>
        </div>    
    )
}

export default Answer