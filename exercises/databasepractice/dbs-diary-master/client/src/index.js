import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./main/App";
import reducer from "./redux/reducers";

import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));
