import React from "react";
import Navbar from  "./Navbar.js"
import{Switch, Route} from "react-router-dom";
import Home from "./views/Home.js"
import Party from "./views/Party.js"
import FunParty from "./views/FunParty.js"
import Dancecontainer from "./views/danceparty/dancecontainer.js"

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/party" component = {Party}/>
            <Route path = "/funparty" component = {FunParty}/>
            <Route path = "/danceparty" component = {Dancecontainer}/>
          </Switch>
      </div>
    )
  }
}

export default App
