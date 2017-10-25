const redux = require("redux");

const state = (
  counter: 0,
  contactList: []
)

function addOne(){
  return {
      type: "ADD_ONE"

  }
}

function addName(name){
  return{
    type: "NAME_CHANGE",
    name
  }
}

function removeName(name){
  return{
    type: "REMOVE_NAME",
    name
  }
}


function minusOne(){
  return {
      type: "MINUS_ONE"

  }
}

function custom(num){
  return {
      type: "CUSTOM",
      num
  }
}

function reset(){
  return {
      type: "RESET"

  }
}

function reducer(prevState = state, action){
    switch(action.type){
      case "NAME_CHANGE":
          return{
            contactList: [...prevState.contactList, action.name],
            counter: prevState.counter
          }
      case "CUSTOM":
        return{
          contactList: prevState.contactList,
          counter: prevState.counter + action.value
        }
      case "REMOVE_NAME":
          return {
              contactList: [...prevState.contactList].pop(contactList[0]),
              counter: prevState.counter
        }
      case "ADD_ONE":
        return {
            contactList: prevState.contactList,
            counter: prevState.counter + 1
        }
      case "MINUS_ONE":
        return {
          contactList: prevState.contactList,
          counter: prevState.counter - 1
        }
        case "RESET":
          return {
            contactList: prevState.contactList,
            counter: 0
          }
        default:
          return prevState;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(custom(4));
store.dispatch(addName("stuff"));
store.dispatch(addName("stuff"))
