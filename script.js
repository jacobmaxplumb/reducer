const initalState = { count: 0, todos: [] };

function counterReducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DEINCREMENT":
            return { count: state.count - 1 }
        default:
            return state;
    }
}

function dispatch(action) {
    state = counterReducer(state, action);
    console.log(state);
}

let state = initalState;
dispatch({type: "INCREMENT"});
dispatch({type: "DEINCREMENT"});

