import React from "react";
import ReactDOM from "react-dom";


import './index.css';
import Logo from "./components/Logo.js"
import Boxone from "./components/Boxone.js"
import Nav_bar from "./components/Nav_bar.js"
import Background from "./components/Background.js"
import Header from "./components/Header.js"
import Info_sect from "./components/Info_sect.js"
import Footer from "./components/Footer.js"
ReactDOM.render(
  <div>
  <Nav_bar />
  <Logo />
  <Background/>
  <Boxone />
  <Header />
  <Info_sect />
  <Footer />
  </div>
, document.getElementById('root'))
