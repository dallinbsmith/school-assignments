import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./main/App";
import "./css/index.css";
import "./css/navbar.css";
import "./css/avatar.css";
import "./css/projectnav.css";
import "./css/resume.css";
import "./css/modalmain.css";
import "./css/frontendmodal.css";
import "./css/fullstackmodal.css";
import "./css/uxmodal.css";
import "./css/marketingmodal.css";
import "./css/designmodal.css";
import "./css/contact.css";
import "./css/lasttoimport.css";

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));
