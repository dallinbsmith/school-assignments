import React from "react";

import NameComp from "./components/NameComp.js";

class App extends React.Component{
  constructor (){
    super();
      this.state = {
        currentname : " ",
        whatsonlist : []
      }
      this.displayName = this.displayName.bind(this);
      this.addToTheList = this.addToTheList.bind(this);
  }
  displayName(event){
    this.setState({
        currentname: event.target.value
    });

    }
    addToTheList(event){
      this.setState((prevState) => {
          return {
              whatsonlist : [...prevState.whatsonlist, prevState.currentname]
          }
    });
  }

  render(){
    return(
      <NameComp
            name = {this.state.currentname}
            displayName = {this.displayName}
            list = {this.state.whatsonlist}
            addToTheList = {this.addToTheList}/>
    )
  }
}


export default App;
