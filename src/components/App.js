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
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h1 className="text-center">Shopping Cart App</h1>
  </div>
</nav>
        <Cart />
        <ProductList />
        <Wishlist />
        {/* <Coupon /> */} {/* Enable this only if Coupon.js exists */}
      </div>
    </Provider>
  );
}

export default App;
