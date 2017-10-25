const state = {
    todos: []
}

export default function reducer(prevState = state, action) {
    const newTodos = [...prevState.todos]
    switch(action.type) {
        case "ADD_TODO":
            newTodos.push(action.todo);
            return {
                todos:newTodos
            }

        default:
            return prevState;
    }
}
