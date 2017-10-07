import React from "react";
import Vacacard from "./vaca_cards.js"
import myData from "./vaca_spots.json";

function VacaArr(props){
    const vacaArray = myData.map((location)=>{

        return <Vacacard place={location.place}
                        price={location.price}
                        timeToGo={location.timeToGo}/>
    });
    return vacaArray
}

export default VacaArr;
