import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";

const store = configureStore();

ReactDOM.render(
    <Provider store = {store}>
        < Router >
             <Route component={App}/> 
        </Router >
    </Provider>, 
        document.getElementById('root')
    );
