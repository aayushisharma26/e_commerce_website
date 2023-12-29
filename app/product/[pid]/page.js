"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page({ params }) {
  const [productDetails, setProductDetails] = useState(null);

  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${params.pid}`)
      .then((res) => res.json())
      .then((res) => {
        setProductDetails(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.pid]);

  const navigateToProductList = () => {

    const productListUrl = `/product_list/${params.category}`;
    window.location.href = productListUrl;
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: "solid 2px red" }}>
      <h1>Product Details</h1>
      <img
        src={productDetails.image}
        alt={productDetails.title}
        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
      />
      <p>Product ID: {productDetails.id}</p>
      <p>Title: {productDetails.title}</p>
      <button onClick={navigateToProductList} className="btn btn-primary">
        Go Back to Product List
      </button>
    </div>
  );
}

export default Page;
