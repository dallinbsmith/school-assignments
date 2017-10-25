import {countries} from "./countries"

const state = {
  countries:[]
}

const reducer = function(prevState = state, action){
    return{
      countries: countries(prevState.countries, action)
    }
}

export default reducer;
