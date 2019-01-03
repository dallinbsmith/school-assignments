import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Courses from './Courses';
import Public from "./Public";
import Navigation from "./Nav";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path = "/"/>
        <Route path = "/public" component = {Public} />
        <Route path = "/courses" component = {Courses} />
      </div>
    );
  }
}

export default App;
