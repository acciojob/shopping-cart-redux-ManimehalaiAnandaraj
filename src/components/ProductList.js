import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Wishlist from './Wishlist';


//import { toggleWishlist } from '../redux/wishlistSlice';

const products = [
  { id: 1, name: 'Shoes', price: 50 },
  { id: 2, name: 'Shirt', price: 30 },
  { id: 3, name: 'Pants', price: 40 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(toggleWishlist(product))}>Wishlist</button>
        </div>
      ))}
    </div>
  );
}
