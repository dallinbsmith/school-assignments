import React from "react";
import scrollToComponent from 'react-scroll-to-component';

import Avatar from "./Avatar";
import ProjectNav from "./ProjectNav";
import PageBreak from "./PageBreak";

import FrontendModal from "./modals/FrontendModal";
import FullstackModal from "./modals/FullstackModal";
import UxModal from "./modals/UxModal";
import MarketingModal from "./modals/MarketingModal";
import ProductionModal from "./modals/ProductionModal";
import DesignModal from "./modals/DesignModal";

export default class Projects extends React.Component {
    constructor() {
    super();
    this.state = {
        frontendModalIsOpen: false,
        fullstackModalIsOpen: false,
        uxModalIsOpen: false,
        marketingModalIsOpen: false,
        productionModalIsOpen: false,
        designModalIsOpen: false,
    };
    this.frontendOpenModal = this.frontendOpenModal.bind(this);
    this.fullstackOpenModal = this.fullstackOpenModal.bind(this);
    this.uxOpenModal = this.uxOpenModal.bind(this);
    this.marketingOpenModal = this.marketingOpenModal.bind(this);
    this.productionOpenModal = this.productionOpenModal.bind(this);
    this.designOpenModal = this.designOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    frontendOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                frontendModalIsOpen: true
            });
        });
    }
    fullstackOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                fullstackModalIsOpen: true
            });
        });
    }
    uxOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                uxModalIsOpen: true
            });
        });
    }
    marketingOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                marketingModalIsOpen: true
            });
        });
    }
    productionOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                productionModalIsOpen: true
            });
        });
    }
    designOpenModal(){
        this.setState((prevState) => {
            return ({
                ...prevState,
                designModalIsOpen: true
            });
        });
    }
    closeModal(prevState){
        this.setState((prevState) => {
            return ({
                frontendModalIsOpen: false,
                fullstackModalIsOpen: false,
                uxModalIsOpen: false,
                marketingModalIsOpen: false,
                productionModalIsOpen: false,
                designModalIsOpen: false,
            });
        });
    }
    render() {
        return (
            <div>
                <Avatar/>
                    <img onClick ={() => scrollToComponent(this.ProjectNav,
                        { offset: -150, align: 'top', duration: 1000})}
                        className = "see-projects-icon"
                        src={require("../../assets/see-projects-icon.png")}
                        alt = "item-scroll">
                        </img>
                <PageBreak/>
                <section className = "ProjectNav" ref = {(section) =>{this.ProjectNav = section;}}>
                    <ProjectNav
                        frontendOpenModal = {this.frontendOpenModal}
                        fullstackOpenModal = {this.fullstackOpenModal}
                        uxOpenModal = {this.uxOpenModal}
                        marketingOpenModal = {this.marketingOpenModal}
                        productionOpenModal = {this.productionOpenModal}
                        designOpenModal = {this.designOpenModal}
                        />
                    <FrontendModal
                        closeModal = {this.closeModal}
                        frontendModalIsOpen = {this.state.frontendModalIsOpen}/>
                    <FullstackModal
                        closeModal = {this.closeModal}
                        fullstackModalIsOpen = {this.state.fullstackModalIsOpen}/>
                    <UxModal
                        closeModal = {this.closeModal}
                        uxModalIsOpen = {this.state.uxModalIsOpen}/>
                    <MarketingModal
                        closeModal = {this.closeModal}
                        marketingModalIsOpen = {this.state.marketingModalIsOpen}/>
                    <ProductionModal
                        closeModal = {this.closeModal}
                        productionModalIsOpen = {this.state.productionModalIsOpen}/>
                    <DesignModal
                        closeModal = {this.closeModal}
                        designModalIsOpen = {this.state.designModalIsOpen}/>
                </section>
                <PageBreak/>
            </div>
        )
    }
}
