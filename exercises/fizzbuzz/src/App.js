import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    let list = [];
    for(let i = 1; i <= 100; i++){
      list.push((i%3? "": "fizz")+ (i%5? "": "buzz")|| i)
    }
    this.state = {
      items: list
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, i)=> <li key = {i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
