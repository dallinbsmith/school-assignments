import React from "react";
import glamorous from "glamorous";

import DBsDiary from "./DBsDiary";
import NativeWeather from "./NativeWeather";
import Pinglist from "./Pinglist";

export default class Projects extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        /// NATIVE WEATHER PHOTOS \\\
        const nwBackground = require("../../assets/native-weather/background_nativeWeather.png");
        const nwLogin = require("../../assets/native-weather/login.png");
        const nwToday = require("../../assets/native-weather/today.png");
        const nwExtended = require("../../assets/native-weather/extended.png");
        ////////////////////////////////////////////

        /// PINGLIST PHOTOS \\\
        const plBackground = require("../../assets/pinglist/background_pinglist.png");
        const plLogin = require("../../assets/pinglist/login.png");
        const plPerformance = require("../../assets/pinglist/performance.png");
        const plAlarms = require("../../assets/pinglist/alarms.png");
        const plProfile = require("../../assets/pinglist/profile.png");
        ////////////////////////////////////////////

        return (
            <div>
                <DBsDiary
                    title="DBs Diary"
                    description="A simple, purposefully dated, user interface for uninhibited journaling"
                    goThere="https://dbs-diary.herokuapp.com/"
                    goText="go there"
                    seeCode="https://github.com/noblepaper/dbs-diary"
                    seeText="see code"/>
                <NativeWeather
                    title="Native Weather"
                    description="Simple IOS weather app with wildly unneccessary user authentication"
                    seeCode="https://github.com/vschool-september-2017/native-weather"
                    seeText="see code"
                    background={nwBackground}
                    login={nwLogin}
                    today={nwToday}
                    extended={nwExtended}/>
                <Pinglist
                    title="Pinglist"
                    description="App design for API monitoring service"
                    background={plBackground}
                    login={plLogin}
                    performance={plPerformance}
                    alarms={plAlarms}
                    profile={plProfile}/>
            </div>
        )
    }
}
