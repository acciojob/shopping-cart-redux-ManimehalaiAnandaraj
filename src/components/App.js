import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Cart from './Cart';
import Wishlist from './Wishlist';
import CouponInput from './CouponInput';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart App</h1>
        <CouponInput />
        <Cart />
        <Wishlist />
      </div>
    </Provider>
  );
}

export default App;
