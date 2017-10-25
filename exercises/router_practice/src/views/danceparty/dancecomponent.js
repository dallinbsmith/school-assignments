import React from "react"
import{Switch, Route} from "react-router-dom";
import Service from "./view/danceviewcomponent.js"

function Dancecomponent(props){
let searchId = props.searchId;
  return(
    <div>
      <div>
        {props.generateLinks()}
      </div>
      <div>
          <Switch>
              <Route path = "/danceparty/:id" render ={(props)=>{
                        return (
                    <Service searchId={searchId}{...props}/>
                )
              }}/>
            </Switch>
        </div>
    </div>
  )
}

export default Dancecomponent
