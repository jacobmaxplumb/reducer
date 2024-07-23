import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PROPERTY":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <form>
      <input
        placeholder="name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_PROPERTY",
            name: "name",
            value: e.target.value,
          })
        }
      />
      <input
        placeholder="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_PROPERTY",
            name: "email",
            value: e.target.value,
          })
        }
      />
      <input
        placeholder="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_PROPERTY",
            name: "password",
            value: e.target.value,
          })
        }
      />
    </form>
  );
};
