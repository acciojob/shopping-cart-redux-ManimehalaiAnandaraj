import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toggleWishlist } from '../redux/wishlistSlice';

const products = [
  { id: 1, name: 'Shoes', price: 50 },
  { id: 2, name: 'Shirt', price: 30 },
  { id: 3, name: 'Pants', price: 40 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Product List</h3>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <div className="custom-card" key={product.id}>
  <div className="card-body">
    <h4 className="card-title">{product.name}</h4>
    <p className="card-text">${product.price}</p>
    <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    <button className="btn btn-warning" onClick={() => dispatch(toggleWishlist(product))}>Wishlist</button>
  </div>
</div>

        </div>
      ))}
    </div>
  );
}
