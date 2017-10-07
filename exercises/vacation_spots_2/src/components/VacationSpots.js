import React from "react";
import Data from "../VacationData.json"
import VacationCard from "./VacationCard.js"

function VacationSpots(props){
      const VacationSpotArray = Data.map((location) => {
        // import image from imgUrl;
        return <VacationCard  image = {require(`./VacationImages/${location.image}`)}
                              place = {location.place}
                              price = {location.price}
                              timeToGo = {location.timeToGo}/>

      });

  return VacationSpotArray;
}

export default VacationSpots
