import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart, increaseQty, decreaseQty
} from './actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountedTotal = total - (total * discount / 100);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.qty}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <p>Total: ${discountedTotal.toFixed(2)} ({discount}% off)</p>
    </div>
  );
};

export default Cart;
