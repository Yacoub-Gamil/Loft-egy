import { createContext, useContext, useReducer } from "react";

const ContextAll = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "addItemToCart":
      return [...state, action.payload];

    default:
      break;
  }
}

function ContextAllProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextAll.Provider value={{ items, dispatch }}>
      {children}
    </ContextAll.Provider>
  );
}

export function useContextAll() {
  const values = useContext(ContextAll);
  return values;
}

export default ContextAllProvider;
