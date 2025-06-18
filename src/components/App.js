import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Cart from './Cart';
import Wishlist from './Wishlist';
import ProductList from './ProductList';
// import Coupon from './Coupon'; // ❌ Remove or fix

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart App</h1>
        <Cart />
        <ProductList />
        <Wishlist />
        {/* <Coupon /> */} {/* Enable this only if Coupon.js exists */}
      </div>
    </Provider>
  );
}

export default App;
