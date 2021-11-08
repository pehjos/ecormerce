import {CART,CREATECART,DELETECART, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, cart: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case CART:
      return {
        ...state,
        cart: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, cart: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, cart: state.cart.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
       cart: state.cart.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATECART:
      return { ...state, cart: [...state.cart, action.payload] };
    case UPDATE:
      return { ...state, cart: state.cart.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETECART:
      return { ...state, cart: state.cart.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
