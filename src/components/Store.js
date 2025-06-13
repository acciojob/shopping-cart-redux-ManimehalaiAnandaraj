import { createStore, combineReducers } from 'redux';
import { cartReducer, wishlistReducer, discountReducer } from './reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  discount: discountReducer
});

const store = createStore(rootReducer);

export default store;
