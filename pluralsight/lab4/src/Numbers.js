import React from 'react'

const Numbers = (props) => {
    let used = props.usedNumbers
    const filtered = [1,2,3,4,5,6,7,8,9].filter(
        function(e) {
          return this.indexOf(e) < 0;
        },props.selectedNumbers);
    return(
        <div>
            <hr/>
            <div className = "text-center p-3">
                {filtered.map((number, i) => 
                <span key = {i} 
                    onClick = {() => props.selectTheNumber(number)} 
                    className = {used.includes(number) ? "numberSelect numberSelectGreen" : "numberSelect"}>
                    {number}
                 </span>)}
            </div>
        </div>    
    )
}

export default Numbers