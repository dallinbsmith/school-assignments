import React from "react";
import Counter from "../main/Counter";
import ContactList from "./contacts/Contactlist"

function App(props){
  return(
        <div>
          <Counter />
          <ContactList />
        </div>
  )
}

export default App;
