import React, { Component } from 'react'
import Answer from './Answer'
import Buttons from './Buttons'
import Stars from './Stars'
import Numbers from './Numbers'
import OtherButton from './OtherButton'

class App extends Component {
  
  constructor (){
    super();
    this.state = {
      selectedNumbers: [],
      randomStars: Array.from({length: (Math.floor(Math.random() * 9)+1)}, () => 1),
      answerIsCorrect: null,
      usedNumbers: []
    }
    this.selectTheNumber = this.selectTheNumber.bind(this)
    this.unselectTheNumber = this.unselectTheNumber.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.acceptAnwer = this.acceptAnswer.bind(this)
  }

  selectTheNumber = (clickedNumber) => {
    if (!this.state.usedNumbers.includes(clickedNumber)){
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  }
  unselectTheNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomStars.reduce((a, b) => a + b, 0) === prevState.selectedNumbers.reduce((a, b) => a + b, 0)
    }))
  }
  acceptAnswer = () => {
    this.setState (prevState => ({
      usedNumbers: prevState.selectedNumbers.concat(prevState.usedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomStars: Array.from({length: (Math.floor(Math.random() * 9)+1)}, () => 1)
    }))
  }
  render() {
    return (
      <div>
        <Stars randomStars = {this.state.randomStars}/>
        <Buttons  selectedNumbers = {this.state.selectedNumbers}
                  checkAnswer = {this.checkAnswer}
                  answerIsCorrect = {this.state.answerIsCorrect}
        />
        <OtherButton acceptAnswer = {this.acceptAnswer}/>
        <Answer selectedNumbers = {this.state.selectedNumbers}
                unselectTheNumber = {this.unselectTheNumber}
        />
        <Numbers 
          selectedNumbers = {this.state.selectedNumbers}
          selectTheNumber = {this.selectTheNumber}
          usedNumbers = {this.state.usedNumbers}
        />
      </div>
    );
  }
}

export default App;
