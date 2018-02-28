import React from "react";


class ContactComponent extends React.Component{
    constructor(){
            super();
            this.state = {
                name: '',
                email: '',
                company: '',
                phone: '',
                budget: '',
                content: '',
            };
            this._inputName = this._inputName.bind(this)
            this._inputEmail = this._inputEmail.bind(this)
            this._inputCompany = this._inputCompany.bind(this)
            this._inputPhone = this._inputPhone.bind(this)
            this._inputBudget = this._inputBudget.bind(this)
            this._inputContent = this._inputContent.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    _inputName(event) {
        this.setState({name: event.target.value});
    }
    _inputEmail(event) {
        this.setState({email: event.target.value});
    }
    _inputPhone(event) {
        this.setState({phone: event.target.value});
    }
    _inputBudget(event) {
        this.setState({budget: event.target.value});
    }
    _inputContent(event) {
        this.setState({content: event.target.value});
    }
    _inputCompany(event) {
        this.setState({company: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var emailjs = require('emailjs-com');
        emailjs.init("user_kN97IVR8Y7eof8LuVrn24");
        emailjs.send("default_service","template_2awq7s5i",this.state)
            .then(
                function(response) {
                    console.log("SUCCESS", response);
                },
                function(error) {
                    console.log("FAILED", error);
                }
            );
            this.setState({name: ""});
            this.setState({email: ""});
            this.setState({company: ""});
            this.setState({phone: ""});
            this.setState({budget: ""});
            this.setState({content: ""});
        }
    render(){
    return(
        <div className = "contact-container">
        <div className = "contact-spacer"></div>
        <h3 className = "contact-title">{"HIT ME UP"}</h3>
        <div className ="contact-form">
            <form id = "submissionform" action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Your full name *</label>
                <input className="contact-ar form-control" id="name" ref="name" value = {this.state.name} onChange = {this._inputName} required type="text" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Your email address *</label>
                <input className="contact-ar form-control" id="email" ref="email" value = {this.state.email} onChange = {this._inputEmail} required type="email" />
                </div>
                <div className="form-group">
                <label htmlFor="company">Your company *</label>
                <input className="contact-ar form-control" id="company" ref="company" value = {this.state.company} onChange = {this._inputCompany} required type="text" />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Your phone number *</label>
                <input className="contact-ar form-control" id="phone" ref="phone" value = {this.state.phone} onChange = {this._inputPhone} required type="phone" />
                </div>
                <div className = "contact-sect">
                    <h3 className = "contact-center contact-title">HOW CAN I HELP?</h3>
                    <div className="form-group contact-checkboxes">
                    <label className="checkbox-inline"><input id="areas" ref="areas" type="checkbox" value="Development" />Development</label>
                    <label className="checkbox-inline"><input id="areas" ref="areas" type="checkbox" value="UX Design" />UX Design</label>
                    <label className="checkbox-inline"><input id="areas" ref="areas" type="checkbox" value="Design" />Design</label>
                    <label className="checkbox-inline"><input id="areas" ref="areas" type="checkbox" value="Production" />Production</label>
                    <label className="checkbox-inline"><input id="areas" ref="areas" type="checkbox" value="Other" />Other</label>
                    </div>
                </div>
                <div className="form-group">
                <label htmlFor="budget">Give me a rough idea of your budget *</label>
                <input className="contact-ar form-control" id="budget" ref="budget" value = {this.state.budget} onChange = {this._inputBudget} type="text" />
                </div>

                <div className="form-group">
                <label htmlFor="project">Tell me about your project *</label>
                <textarea className="contact-ar form-control" id="project" ref="project" value = {this.state.content} onChange = {this._inputContent} rows="4" />
                </div>

                <div className="form-group">
                <div className = "contact-sect">
                    <button className="contact-submit" type="submit" value = "Submit">SEND IT</button>
                </div>
                </div>
                </form>
                </div>
        </div>
        )
    }
}

export default ContactComponent
