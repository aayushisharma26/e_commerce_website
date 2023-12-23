// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function Page({ params }){
//     return <div>My Post: {params.category}</div>
// }



// pages/product_list/[category].js
"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList({ params }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const fetchCategoryProducts = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryProducts(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [params.category]);

  if (!categoryProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <h1>Product List - {params.category}</h1>
      <div className="row">
        {categoryProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div style={{ borderRadius: '8px', border: '1px solid black' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '350px', height: '300px', borderRadius: '8px' }}
              />
              <div className="p-3">
                <h6>{product.title}</h6>
                <p>Price: ${product.price}</p>
                <p>ID: {product.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

