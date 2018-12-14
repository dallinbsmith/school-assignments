import React from 'react'
import Form from './Form'
import Cardlist from './Cardlist'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    this.addNewCard = this.addNewCard.bind(this);
  }
  addNewCard = (cardInfo) => {
    this.setState((prevState) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }
  render() {
    return ( 
      <div>
       <Form onSubmit = {this.addNewCard}/>
       <Cardlist cards = {this.state.cards}/>
      </div>
    )
  }
}