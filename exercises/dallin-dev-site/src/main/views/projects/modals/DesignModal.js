import React from 'react';
import Modal from 'react-modal';

import Defy from './projectpages/designprojects/Defy'
import Ropechair from './projectpages/designprojects/RopeChair'
import Klim from './projectpages/designprojects/Klim'
import Wicked from './projectpages/designprojects/Wicked'
import Student from './projectpages/designprojects/Student'

const pagecount = [Defy, Ropechair, Klim, Wicked, Student]

class DesignModal extends React.Component {
    constructor() {
        super();
        this.state = {
            thumbActive1: false,
            thumbActive2: false,
            thumbActive3: false,
            thumbActive4: false,
            pageIndex: 0,
        };
        this._pageScroll=this._pageScroll.bind(this);
        this._pageBackScroll=this._pageBackScroll.bind(this);
        this._toggleClass1 = this._toggleClass1.bind(this);
        this._toggleClass2 = this._toggleClass2.bind(this);
        this._toggleClass3 = this._toggleClass3.bind(this);
        this._toggleClass4 = this._toggleClass4.bind(this);
      }
      _pageScroll(){
          if (this.state.pageIndex !== pagecount.length - 1){
            this.setState((prevState) =>{
                return ({
                    ...prevState,
                    pageIndex: prevState.pageIndex + 1
                  });
              });
          } else {
              this.setState((prevState) =>{
                  return({
                      ...prevState,
                      pageIndex: 0
                      });
                  });
              }
            }
      _pageBackScroll(){
        if (this.state.pageIndex !== 0){
          this.setState((prevState) =>{
              return ({
                  ...prevState,
                  pageIndex: prevState.pageIndex - 1
                });
            });
        } else {
            this.setState((prevState) =>{
                return({
                    ...prevState,
                    pageIndex: pagecount.length - 1
                    });
                });
            }
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
      _toggleClass3(){
          const currentState = this.state.thumbActive3;
          this.setState((prevState) =>{
              return({
                  ...prevState,
                  thumbActive3: !currentState
                  });
              });
      }
      _toggleClass4(){
          const currentState = this.state.thumbActive4;
          this.setState((prevState) =>{
              return({
                  ...prevState,
                  thumbActive4: !currentState
                  });
              });
      }
  render() {
      let Proj = pagecount[this.state.pageIndex]
    return (
        <div>
          <Modal
            isOpen={this.props.designModalIsOpen}
            onRequestClose={this.props.closeModal}
            className = "modal-container"
            visible = {this.props.designModalIsOpen}
            contentLabel="Example Modal"
          >
          <div className = "modal-inner-container">
            <div className = "modal-close" onClick={this.props.closeModal}></div>
            </div>
            <div className = "modal-white-backing"></div>
            <div className = "modal-color-line"></div>
            <div className = "modal-content-container">
                <div className = "design-texture"></div>
                <Proj
                    thumbActive1 = {this.state.thumbActive1}
                    thumbActive2 = {this.state.thumbActive2}
                    thumbActive3 = {this.state.thumbActive3}
                    thumbActive4 = {this.state.thumbActive4}
                    _toggleClass1 = {this._toggleClass1}
                    _toggleClass2 = {this._toggleClass2}
                    _toggleClass3 = {this._toggleClass3}
                    _toggleClass4 = {this._toggleClass4}
                />
                <div
                className = {this.state.thumbActive1||this.state.thumbActive2||this.state.thumbActive3||this.state.thumbActive4
                    ? 'thumb-enlarge-background' : 'null'}></div>
                <div onClick = {this._pageScroll} className = "next-button"></div>
                <div onClick = {this._pageBackScroll} className = "prev-button"></div>
            </div>
          </Modal>
        </div>
    );
  }
}
export default DesignModal
