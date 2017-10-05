import React from "react"
import ImageUploader from 'react-images-upload';

function Logo(){
  return (
    <div>
    <img className = "logoimage" src = {require("./images/Logo.png")} alt = " "/>
    <h3 className = "logoTitle">BUCKSTAB</h3>
    </div>
  )
}

export default Logo
