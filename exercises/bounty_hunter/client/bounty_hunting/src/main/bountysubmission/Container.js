import React from "react";
import axios from "axios"

import FindBounty from "./Component"

class BountySubmission extends React.Component{
  constructor(){
    super();
      this.state ={
        bountyhunters: [],
          hunter:{
            fName: ""
          }
      }
  }
  componentDidMount(){
    axios.get(`http://localhost:8000/bounties`).then((response)=>{
      this.setState({
        bountyhunters: response.data
      })
      console.log(response.data)
    })
  }

    render(){
    return(
      <div>
        {this.state.bountyhunters.map((hunted, i) =>{
          return (
            <FindBounty
              person = {hunted}
              getTheHunted = {this.getTheHunted}
              key = {hunted.fName + i}/>
        )
      }
    )}
      </div>
    )
  }
}

export default BountySubmission
