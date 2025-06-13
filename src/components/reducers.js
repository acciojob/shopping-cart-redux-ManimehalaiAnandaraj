import {
  ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,
  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,
  APPLY_COUPON
} from './actions';

const initialCartState = [];

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    case DECREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      );
    default:
      return state;
  }
};

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const discountCodes = {
  SAVE10: 10,
  SAVE20: 20
};

export const discountReducer = (state = 0, action) => {
  switch (action.type) {
    case APPLY_COUPON:
      return discountCodes[action.payload.toUpperCase()] || 0;
    default:
      return state;
  }
};
