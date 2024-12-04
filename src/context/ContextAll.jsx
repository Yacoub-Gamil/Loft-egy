import { createContext, useContext, useReducer } from "react";

const ContextAll = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "addItemToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return [...state.filter((el) => el.id !== action.payload)];

    case "clearCart":
      console.log("clear");
      return initialState;

    default:
      break;
  }
}

function ContextAllProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, initialState);
  const getTotalPrice = items.map((item) => item.price);
  const totalPrice = getTotalPrice.reduce((acc, cur) => acc + cur, 0);

  return (
    <ContextAll.Provider value={{ items, dispatch, totalPrice }}>
      {children}
    </ContextAll.Provider>
  );
}

export function useContextAll() {
  const values = useContext(ContextAll);
  return values;
}

export default ContextAllProvider;
