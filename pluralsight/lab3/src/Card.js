import React from 'react';

const Card = (props) => {
  return (
   <div>
     <img width = "75" src = {props.avatar_url} />
      <h1>{props.name}</h1>
      <h1>{props.company}</h1>
   </div> 
  )
}

export default Card