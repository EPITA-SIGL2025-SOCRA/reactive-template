import React from "react";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    // This `case` is an example of how you can
    // reduce an `action` that adds a new `item` to
    // the `state.basket` array
    case "NEW_BASKET_ITEM":
      const { item } = action;
      return {
        ...state,
        basket: [...state.basket, item],
      };
    default:
      return state;
  }
};

export const AppContext = React.createContext();

function useAppContext() {
  return React.useContext(AppContext);
}

export default useAppContext;
