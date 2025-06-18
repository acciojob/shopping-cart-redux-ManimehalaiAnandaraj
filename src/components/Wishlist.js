// components/Wishlist.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';

function Wishlist() {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
