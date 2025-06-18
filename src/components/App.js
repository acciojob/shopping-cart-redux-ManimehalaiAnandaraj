import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Cart from './Cart';
import Wishlist from './Wishlist';


function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart App</h1>
      
        <Cart />
        <Wishlist />
      </div>
    </Provider>
  );
}

export default App;
