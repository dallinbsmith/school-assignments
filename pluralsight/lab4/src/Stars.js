import React from 'react'

const Stars = (props) => {
    return (
        <div className = "text-center">
           {props.randomStars.map((star, i) => <span key = {i} className="fa fa-star checked"></span>)}
        </div>
    )
}

export default Stars 