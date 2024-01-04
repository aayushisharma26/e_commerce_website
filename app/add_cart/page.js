"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product({ id, name, price, addToCart }) {
  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

function ShoppingCart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Online Store</h1>
      
      <Product id={1} name="Product 1" price={20} addToCart={addToCart} />
      <Product id={2} name="Product 2" price={30} addToCart={addToCart} />
      <Product id={3} name="Product 3" price={25} addToCart={addToCart} />

      <hr />

      <ShoppingCart cart={cart} />
    </div>
  );
}

export default AddCart;
