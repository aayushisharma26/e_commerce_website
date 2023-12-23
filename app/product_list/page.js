// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Product_list() {
//   return (
//     <div>Product_list</div>
//   )
// }

// export default Product_list



"use client"
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ category }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?category=${category}`);
        const data = await response.json();
        setCategoryData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (category) {
      fetchData();
    }
  }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      {categoryData.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>ID: {item.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


