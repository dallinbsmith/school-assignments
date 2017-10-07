import React from "react";

function VacationCard(props){
  return(
      <div className = "vacation_spots" >
          <img src={require(props.image)}/>
          <h4 className = "place">{props.place}</h4>
          <h4 className = "price">{props.price}</h4>
          <h4 className = "timeToGo">Best Time to Visit: {props.timeToGo}</h4>
      </div>
  )
}

export default VacationCard;
