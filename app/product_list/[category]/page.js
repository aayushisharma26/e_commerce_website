"use client";
import '../product_list.css';
import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className='carousel'>
      <div className='category'>
        <h2>CATEGORY /PRODUCT NAME</h2>
        <h3>Crafted Elegance: Artisanal Wooden Furniture</h3>
      </div>
      <div className="container-fluid" id="container">
        <div className="row">
          <nav id="sidebar" className="col-md-3">
            <div className="mb-3">
              <label htmlFor="minPrice">Min Price:</label>
              <input
                type="number"
                className="form-control"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="maxPrice">Max Price:</label>
              <input
                type="number"
                className="form-control"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply Filter
            </button>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-9">
            <h1>Product List - {params.category}</h1>
            <div className="row">
              {categoryProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="electronics_image">
                    <Link href={`/product/${product.id}`} passHref>
                      <img src={product.image} alt={product.title} id="image" />
                    </Link>
                    <p>Price: ${product.price}</p>
                    <p>ID: {product.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
