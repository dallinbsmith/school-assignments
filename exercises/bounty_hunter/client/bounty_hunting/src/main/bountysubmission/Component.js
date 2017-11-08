import React from "react";

function FindBounty(props){
  return(
    <div>
      <h2>{props.person.fName}</h2>
      <h2>{props.person.lName}</h2>
      <h3>{props.person.bountyValue} Imperial Credits</h3>
      <h5>{props.person.Type}</h5>
      <hr/>
    </div>
  )
}
export default FindBounty
