const state = {
  counter: 0,
  background : "none",
  contactList: [
    {
      firstName: "Bum",
      lastName: "Face"
    },
    {
      firstName: "Cookie",
      lastName: "Monster"
    },
    {
      firstName: "Unicorn",
      lastName: "Shoes"
    },
    {
      firstName: "Red",
      lastName: "Leader"
    }
  ]
}

const reducer = function(prevState = state, action){
    switch(action.type){
      case "DANCE":
        return{
          ...prevState,
          counter: prevState.counter
        }
      case "ADD_ONE":
        return{
          ...prevState,
          counter: prevState.counter + 1
        }
        case "SUBTRACT_ONE":
          return{
            ...prevState,
            counter: prevState.counter - 1
          }
          case "RESET":
            return{
              ...prevState,
              counter: 0

            }
            case "CUST_LIST":
              return{
                counter: 0,
                contactList: prevState.contactList,
                background : prevState.background
              }
      default:
        return prevState
    }
}

export default reducer
