import React from "react";
import {Switch, Route} from "react-router-dom";
import ShitContainer from "./views/oneShit/ShitContainer";
import ListContainer from "./views/wholeList/ListContainer";

export default function ListLanding() {
    return (
        <Switch>
            <Route exact path="/shitlist" component={ListContainer}/>
            <Route path="/shitlist/:id" component={ShitContainer}/>
        </Switch>
    )
}
