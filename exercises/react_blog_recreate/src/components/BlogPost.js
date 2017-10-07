import React from "react";
import Data from "./BlogPostData.json"
import BlogPost from "./BlogComponent.js"

function BlogComp(props){
  const BlogArray = Data.map((blog) => {
  return <BlogPost title = {blog.title}
                description = {blog.description}
                meta = {blog.meta}/>

      });
  return BlogArray;
}

export default BlogComp
