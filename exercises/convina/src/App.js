import React from "react";

export default class App extends React.Component {
        constructor(){
          super()
          this.state = {
              loading: true,
          }
          this.sortingList = this.sortingList.bind(this)
        }
    sortingList (event){
        let updated = this.state.loadedItems;
        updated = updated.filter((item) => item.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
        this.setState({dataArr: updated});
      }
    componentWillMount(){
    this.setState({dataArr: this.state.loadedItems})
      }
      componentDidMount(){
          var xhr = new XMLHttpRequest()
          xhr.open("GET", 'https://dev.userlite.com/apps/userlitestoreapps/devprojects/v999/sample.htp?v=2', true)
          xhr.onload = function(e){
            if (xhr.readyState === 4){
              if (xhr.status === 200){
                const data = JSON.parse(xhr.response).entries
                const apis = data.map((api, i)=> api.API)
                this.setState({
                  loadedItems: apis,
                  dataArr: apis,
                  loading: false
                })
              } else {
                console.error(xhr.statusText)
              }
            }
          }.bind(this)
          xhr.onerror = function(e){
            console.error(xhr.statusText)
          }
          xhr.send(null)
        }
    render() {
        return (
        <div className="maincontainer">
            <div style = {{display: (this.state.loading === true)? "none" : "block"}}>
            <input onChange = {this.sortingList} type="search"></input>
        </div>
            <h1>{(this.state.loading === true)?"Loading..." : null}</h1>
            <div>{(this.state.loading === false)?
                this.state.dataArr.map((entry, i) => (
                <div key={entry + i}>{entry}</div>
                    )) : null
                }
        </div>
        </div>)
    }
}
