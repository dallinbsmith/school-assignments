import React from "react";
import moment from "moment";
import Day from "./Day"

class CalContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            thisMonthsDays: []
        }
    }

    getDaysInThisMonth() {
        const now = new Date();
        const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
        const daysBeforeFirst = moment().startOf('month').day() - 1;

        const daysArray = [];
        let daysBeforeFirstCount = 0;
        for (let i = 0; i < 35; i++) {
            if (daysBeforeFirstCount < daysBeforeFirst || i > days + daysBeforeFirst - 1) {
                daysArray.push("");
                daysBeforeFirstCount++;
            } else {
                daysArray.push(i - daysBeforeFirst);
            }
        }
        this.setState({
            thisMonthsDays: daysArray
        });
    }

    componentDidMount() {
        this.getDaysInThisMonth();
    }

    render() {
        const calendarGridStyles = {
            width: "245px",
            height: "170px",
            display: "flex",
            flexWrap: "wrap"
        }

        const headerStyles = {
            margin: "0",
            marginTop: "55px",
            textAlign: "center"
        }

        const dayHeaderContainerStyles = {
            display: "flex",
            justifyContent: "space-around",
            width: "245px",
            height: "55px",
            textAlign: "center",
            margin: "0",
            fontSize: "1.5em"
        }
        return (
            <div>
                <h1 style={headerStyles}>THIS MONTH:</h1>
                <h3 style={dayHeaderContainerStyles}>
                    <p>M</p>
                    <p>T</p>
                    <p>W</p>
                    <p>T</p>
                    <p>F</p>
                    <p>S</p>
                    <p>S</p>
                </h3>
                <div style={calendarGridStyles}>
                    {this.state.thisMonthsDays.map((day, i) => {
                        return (
                            <Day
                                key={i}
                                day={day}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CalContainer;
