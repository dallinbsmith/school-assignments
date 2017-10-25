import React from "react";

import CountriesContainer from "./countries/Container";
import FormContainer from "./form/Container";

function App(props){
  return(
      <div>
          <FormContainer />
          <CountriesContainer />
      </div>
  )
}

export default App
