import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";

function ContactList(props){
  return(
      <div>
        {props.contactList.map((contact, i)=>{
            return  <Contact key = {contact.firstName + i} contact = {contact}/>
        })}
      </div>
  )
}

const mapStateToProps = (state) =>{
  return state;
}


export default connect(mapStateToProps, {}) (ContactList);
