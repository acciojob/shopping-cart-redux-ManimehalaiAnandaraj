import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div className="custom-card card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <button className="btn btn-success" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button className="btn btn-secondary" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
