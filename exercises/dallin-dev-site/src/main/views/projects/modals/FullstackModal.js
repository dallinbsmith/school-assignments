import React from 'react';
import Modal from 'react-modal';

import Blytz from './projectpages/fullstackprojects/Blytz'

class FullstackModal extends React.Component {
    constructor() {
      super();
      this.state = {
          thumbActive1: false,
          thumbActive2: false,
      };
      this._toggleClass1 = this._toggleClass1.bind(this);
      this._toggleClass2 = this._toggleClass2.bind(this);
    }
    _toggleClass1(){
        const currentState = this.state.thumbActive1;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive1: !currentState
                });
            });
    }
    _toggleClass2(){
        const currentState = this.state.thumbActive2;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive2: !currentState
                });
            });
    }
  render() {
    return (
        <div>
          <Modal
            isOpen={this.props.fullstackModalIsOpen}
            onRequestClose={this.props.closeModal}
            className = "modal-container"
            visible = {this.props.fullstackModalIsOpen}
          >
          <div className = "modal-inner-container">
            <div className = "modal-close" onClick={this.props.closeModal}></div>
            </div>
            <div className = "modal-white-backing"></div>
            <div className = "modal-color-line"></div>
            <div className = "modal-content-container">
              <Blytz
              thumbActive1 = {this.state.thumbActive1}
                thumbActive2 = {this.state.thumbActive2}
                _toggleClass1 = {this._toggleClass1}
                _toggleClass2 = {this._toggleClass2}/>
            <div
            className = {this.state.thumbActive1||this.state.thumbActive2
                ? 'thumb-enlarge-background' : 'null'}></div>
            </div>
          </Modal>
        </div>
    );
  }
}

export default FullstackModal
