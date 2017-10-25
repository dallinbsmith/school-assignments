import React from "react";

import Dancecomponent from "./dancecomponent.js"
import {Link} from "react-router-dom"

class Dancecontainer extends React.Component{
  constructor(){
  super()
      this.state = {
          dancemembers: []
      }
      this.searchId = this.searchId.bind(this);
      this.generateLinks = this.generateLinks.bind(this);
    }
  componentDidMount(){
      this.setState({
        dancemembers:[
        {name: "cookie monster",
        _id: "43950uaesojeif"}
        ,
        {name: "fartbutt",
        _id: "43950ugy356nojeif"}
        ,
        {name: "Donatello",
        _id: "4us0adf49msl;"}
        ,
        {name: "Garfield",
        _id: "09bnw90kdnsl3l4"}
      ]
    })
  }
  searchId(id) {
    return this.state.dancemembers.find(dancemember => {
        return id === dancemember._id;
    });
}
  generateLinks(){
    return this.state.dancemembers.map((dancemember)=>{
      return <Link
          key = {dancemember._id}
          to = {`/danceparty/${dancemember._id}`}>{dancemember.name}</Link>
    })
  }
  render(){
    return(
    <div>
      <h1>whtateaeveare</h1>
        <Dancecomponent
            generateLinks = {this.generateLinks}
            searchId={this.searchId}/>
    </div>
      )
    }
  }

export default Dancecontainer
