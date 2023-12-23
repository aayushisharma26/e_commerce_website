"use client";
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
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.pid]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{border:"solid 2px red"}}>
    <h1>Product_list</h1>
    <img
        src={productDetails.image}
        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
    />
    <p>Product ID: {productDetails.id}</p>
    <p>Title: {productDetails.title}</p>
      
    </div>
  );
}

export default Page;



    
  

