import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    //By default no item in shopping cart
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      // Si l'article existe déjà dans le panier alors on utilise .map pour update l'item actuel avec le nouveau, sinon on garde l'ancien article
      // si existItem est null , alors il faut l'ajouter a l'array des articles du panier, enfin
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
