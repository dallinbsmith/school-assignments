import React from "react";
import {Switch, Route} from "react-router-dom";
import Calculator from "./views/calculator/Placeholder";
import Journal from "./views/journal/Journal";
import Landing from "./views/Landing";
import ListLanding from "./views/shitlist/list/ListLanding";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/calculator" component={Calculator}/>
                    <Route path="/journal" component={Journal}/>
                    <Route path="/shitlist" component={ListLanding}/>
                </Switch>
            </div>
        )
    }
}

export default App;
