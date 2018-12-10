<input type="search"></input>
            <h1>{(this.state.loading === true)?"Loading..." : null}</h1>
            <div>{(this.state.loading === false)?
               this.state.newData.map(entry => (
              <div className="station" key={entry.API}>{entry.API}</div>
                        )) : null
                    }
            </div>




      <ul className="list-group">
      {
        this.props.items.map(function(item) {
          return <li className="list-group-item" data-category={item} key={item}>{item}</li>
        })
       }
      </ul>