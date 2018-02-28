import React from 'react';
import Modal from 'react-modal';

import Amazon from './projectpages/marketingprojects/Amazon.js'
import Events from './projectpages/marketingprojects/Events.js'
import Kickstarter from './projectpages/marketingprojects/Kickstarter.js'

const pagecount = [Kickstarter, Events, Amazon]

class MarketingModal extends React.Component {
    constructor() {
        super();
        this.state = {
            pageIndex: 0,
        };
        this._pageScroll=this._pageScroll.bind(this);
        this._pageBackScroll=this._pageBackScroll.bind(this);
      }
      _pageScroll(){
          if (this.state.pageIndex !== pagecount.length - 1){
            this.setState((prevState) =>{
                return ({
                    pageIndex: prevState.pageIndex + 1
                  });
              });
          } else {
              this.setState((prevState) =>{
                  return({
                      pageIndex: 0
                      });
                  });
              }
            }
      _pageBackScroll(){
        if (this.state.pageIndex !== 0){
          this.setState((prevState) =>{
              return ({
                  pageIndex: prevState.pageIndex - 1
                });
            });
        } else {
            this.setState((prevState) =>{
                return({
                    pageIndex: pagecount.length - 1
                    });
                });
            }
          }
  render() {
      let Proj = pagecount[this.state.pageIndex]
    return (
        <div>
          <Modal
            isOpen={this.props.marketingModalIsOpen}
            onRequestClose={this.props.closeModal}
            className = "modal-container"
            visible = {this.props.marketingModalIsOpen}
            contentLabel="Example Modal"
          >
          <div className = "modal-inner-container">
            <div className = "modal-close" onClick={this.props.closeModal}></div>
            </div>
            <div className = "modal-white-backing"></div>
            <div className = "modal-color-line"></div>
            <div className = "modal-content-container">
                <Proj/>
                <div onClick = {this._pageScroll} className = "next-button"></div>
                <div onClick = {this._pageBackScroll} className = "prev-button"></div>
            </div>
          </Modal>
        </div>
    );
  }
}
export default MarketingModal
