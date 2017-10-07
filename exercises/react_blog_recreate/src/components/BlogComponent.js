import React from "react";

function BlogPost(props){
  return(
    <div className = "blogchunk">
      <h3>{props.title}</h3>
      <h4 className = "undertext">{props.description}</h4>
      <h5 className = "metatext">{props.meta}</h5>
      <hr></hr>
    </div>
  )
}

export default BlogPost
