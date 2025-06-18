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
  <div className="text-center w-100">Shopping Cart</div>
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
