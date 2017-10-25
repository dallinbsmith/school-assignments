import React from "react";
import {addOne, subtractOne, reset} from "../redux/actions/index.js";
import {connect} from "react-redux";

function Counter(props){
  const style = {
      width: "25%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      top: "100px",
      fontSize: "120px"
  }
    return(
      <div>
      <div style = {style}>
        <button onClick = {props.addOne}>+</button>
        <span>{props.counter}</span>
        <button onClick = {props.subtractOne}>-</button>
        <button onClick = {props.reset}>Reset</button>
        <button>DANCE</button>
      </div>
      </div>
  )
}

const mapStateToProps = (state) =>{
  return state;
}


export default connect(mapStateToProps, {addOne, subtractOne, reset})(Counter);
