import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        lemmingsKilled : 0
    }
    this.killALemming = this.killALemming.bind(this);
    this.saveALemming = this.saveALemming.bind(this);
  }
  killALemming(){
    this.setState((prevState) => {
        return {
          lemmingsKilled: prevState.lemmingsKilled + 1
        }
    });
  }
  saveALemming(){
    this.setState((prevState) => {
        return {
          lemmingsKilled: prevState.lemmingsKilled - 1
        }
    });
  }
  render() {
    return (
      <div>
        <h1>Lemmings Killed:{this.state.lemmingsKilled}</h1>
        <button onClick = {this.killALemming}>Kill a Lemming</button>
        <button onClick = {this.saveALemming}>Save a Lemming</button>
      </div>
    )
  }
}

export default App
