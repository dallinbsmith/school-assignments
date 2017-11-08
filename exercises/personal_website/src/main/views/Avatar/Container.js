import React from "react";
import AvatarComponent from "./Component"

class Avatar extends React.Component{
  constructor(){
    super();
      this.state = {
        happybox:{
        friends: 0,
        likes: 0,
        messages: 0
      }
    }
  }
  friendUpvote(){
    this.setState((prevState)=>{
  return {
        happybox: {
          ...prevState.happybox,
          friends: prevState + 1
        }
    }
  })
}
  render(){
    return(
        <AvatarComponent/>
    )
  }
}

export default Avatar
