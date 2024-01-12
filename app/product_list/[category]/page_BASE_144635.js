"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function ProductList({ params }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

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

  const applyFilter = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        const filteredProducts = res.filter(
          (product) =>
            (minPrice === '' || product.price >= parseInt(minPrice, 10)) &&
            (maxPrice === '' || product.price <= parseInt(maxPrice, 10))
        );
        setCategoryProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  if (!categoryProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3" style={{ border: "red 2px solid" }}>
          <div className="mb-3">
            <label htmlFor="minPrice" className="form-label">
              Min Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maxPrice" className="form-label">
              Max Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={applyFilter}>
            Apply Filter
          </button>
        </nav>

        {/* Main content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-9">
          <h1>Product List - {params.category}</h1>
          <div className="row">
            {categoryProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div style={{ borderRadius: '8px', border: '1px solid black' }}>
                  <Link href={`/product/${product.id}`} passHref>
                    {/* <a> */}
                      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                      
                    {/* </a> */}
                  </Link>
                  <div className="p-3">
                    <h6>{product.title}</h6>
                    <p>Price: ${product.price}</p>
                    <p>ID: {product.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}










