import React from 'react';
import Modal from 'react-modal';

import ProductionReel from './projectpages/productionprojects/ProductionReel'

class ProductionModal extends React.Component {
    constructor() {
        super();
        this.state = {
        };
      }
  render() {
    return (
        <div>
          <Modal
            isOpen={this.props.productionModalIsOpen}
            onRequestClose={this.props.closeModal}
            className = "modal-container"
            visible = {this.props.productionModalIsOpen}
            contentLabel="Example Modal"
          >
          <div className = "modal-inner-container">
            <div className = "modal-close" onClick={this.props.closeModal}></div>
            </div>
            <div className = "modal-white-backing"></div>
            <div className = "modal-color-line"></div>
            <div className = "modal-content-container">
                <ProductionReel/>
            </div>
          </Modal>
        </div>
    );
  }
}
export default ProductionModal
