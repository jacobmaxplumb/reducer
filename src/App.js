import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

const initalState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DEINCREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initalState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, initalState);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
