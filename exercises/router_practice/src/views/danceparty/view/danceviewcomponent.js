import React from "react";

function Service(props){
  const info = props.searchId(props.match.params.id);
  console.log(props);
  return(
      <div>
        <h3>{info.name}</h3>
      </div>
  )
}
export default Service
