"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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

  if (!productDetails) {
    return <div>Loading...</div>;
  }



  const addCart=()=>{
  
    
    Cookies.set(`product_${productDetails.id}`, JSON.stringify(productDetails));

  }
  return (
    <div style={{ border: "solid 2px red" }}>
      <h1>Product Details-</h1>
      <img
        src={productDetails.image}
        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
      />
      <p>Product ID: {productDetails.id}</p>
      <p>Title: {productDetails.title}</p>
      <button  className="btn btn-success" onClick={()=>addCart(productDetails)}>ADD TO CART</button>
      <button  className="btn btn-success" >BUY NOW</button>


    </div>
  );
}

export default Page;




