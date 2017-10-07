import React from "react";

import BlogComp from "./BlogPost.js"

function InfoPage(){
  return (
  <div nameClass = "bodystuff">
    <BlogComp/>
    <button nameClass = "btn">OLDER POSTS</button>
  </div>
)
}

export default InfoPage
