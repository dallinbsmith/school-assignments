import React from "react";
import ReactDOM from "react-dom";


import './index.css';
import Contactcard from "./components/Contactcard.js";
ReactDOM.render(
  <div>
      <Contactcard
        img = {require("./components/Contactimages/bill_nye.png")} alt = " "
        firstName = "Bill"
        lastName = "Nye"
        phone = "555-333-2222"/>
      <Contactcard
      img = {require("./components/Contactimages/captain_america.png")} alt = " "
      firstName = "Captain"
      lastName = "America"
      phone = "555-444-2342"/>
      <Contactcard
      img = {require("./components/Contactimages/harry.png")} alt = " "
      firstName = "Harry"
      lastName = "Styles"
      phone = "555-257-7484"/>
      <Contactcard
      img = {require("./components/Contactimages/mr-myagi.png")} alt = " "
      firstName = "Mr"
      lastName = "Myagi"
      phone = "555-237-9753"/>
      <Contactcard
      img = {require("./components/Contactimages/natalie_dormer.png")} alt = " "
      firstName = "Natalie"
      lastName = "Dormer"
      phone = "555-647-3524"/>
      <Contactcard
      img = {require("./components/Contactimages/terry.png")} alt = " "
      firstName = "Terry"
      lastName = "Crews"
      phone = "555-647-3524"/>
  </div>
  , document.getElementById('root'));
