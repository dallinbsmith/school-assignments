import React from "react";

import FormContainer from "./bountyform/Container.js";
import BountySubmission from "./bountysubmission/Container";

function App(){
    return(
      <div>
        <BountySubmission />
        <FormContainer />
      </div>
    )
}

export default App
