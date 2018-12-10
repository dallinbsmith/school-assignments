import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import "./styles/index.css";
import App from "./main/App";

// reducers \\
import products from "./main/redux/products";
import cart from "./main/redux/cart";

const reducer = combineReducers({
    products,
    cart
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root"));
