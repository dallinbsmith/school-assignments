import React from "react";
import axios from "axios";

import Persontohit from "./components/Persontohit.js";

import index from "./index.css"
class App extends React.Component {
    constructor(){
      super();
        this.state={
        personOfInterest: [],
        randomColor: ""
        }
    }

    componentDidMount(){
      axios.get("http://api.vschool.io:6543/hitlist.json").then((response) => {
          this.setState({
            personOfInterest: response.data
        })
        })
        axios.get("http://www.colr.org/json/color/random").then((responses) => {
          this.setState({
              randomColor: responses.data
        })
    })
  }

    render(){

        return(
          <div>
            {this.state.personOfInterest.map((obj) => {
                return(
            <Persontohit
              color = {this.state.randomColor.new_color}
              data = {obj.name}
              image = {obj.image}
                  />
                )}
            )}
          </div>
        )
    }
}
export default App
