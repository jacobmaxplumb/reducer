import { useReducer } from "react";

const initialState = {
  text: "",
  todos: [],
  selectedTodo: null,
};

const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  UPDATE_TEXT: "UPDATE_TEXT",
  RESET: "RESET",
  SELECT_TODO: "SELECT_TODO",
};

function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        text: "",
        todos: [...state.todos, { id: Date.now(), text: state.text }],
        selectedTodo: null,
      };
    case ACTIONS.DELETE:
      const todos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: todos };
    case ACTIONS.UPDATE:
      const todo = { ...state.selectedTodo, text: state.text };
      const todoList = [...state.todos];
      const indexOfTodo = todoList.findIndex((t) => t.id === todo.id);
      todoList[indexOfTodo] = todo;
      return { text: "", todos: todoList, selectedTodo: null };
    case ACTIONS.UPDATE_TEXT:
      return { ...state, text: action.newText };
    case ACTIONS.SELECT_TODO:
      return { ...state, text: action.todo.text, selectedTodo: action.todo };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

export const TodoList = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  console.log(state);

  const updateText = (e) => {
    dispatch({ type: ACTIONS.UPDATE_TEXT, newText: e.target.value });
  };

  return (
    <div>
      <input placeholder="todo item" value={state.text} onChange={updateText} />
      {state.selectedTodo ? (
        <button onClick={() => dispatch({ type: ACTIONS.UPDATE })}>
          Edit Todo
        </button>
      ) : (
        <button onClick={() => dispatch({ type: ACTIONS.ADD })}>Add</button>
      )}

      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <button
            onClick={() => dispatch({ type: ACTIONS.SELECT_TODO, todo: todo })}
          >
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.DELETE, id: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
