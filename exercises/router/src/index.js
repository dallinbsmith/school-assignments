import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import "./index.css"

import App from "./main/App.js"

ReactDOM.render(
  <Router>
  <App/>
  </Router>

, document.getElementById('root'))
