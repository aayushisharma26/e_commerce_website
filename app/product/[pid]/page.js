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
<<<<<<< HEAD
    Cookies.set("poooja","binjawa")
    // Cookies.set(productDetails,true)
    // Cookies.set(`product_${productDetails.id}`, JSON.stringify(productDetails));
=======
  
    
    Cookies.set(`product_${productDetails.id}`, JSON.stringify(productDetails));
>>>>>>> b0a0f2e7019fbab2cc99b32d4a46925f8a544d0d

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
<<<<<<< HEAD
      <button  className="btn btn-success" >ADD TO CART</button>

      {/* <button  className="btn btn-success" onClick={()=>addCart(productDetails)}>ADD TO CART</button> */}
      <button  className="btn btn-success" >BUT NOW</button>
=======
      <button  className="btn btn-success" onClick={()=>addCart(productDetails)}>ADD TO CART</button>
      <button  className="btn btn-success" >BUY NOW</button>
>>>>>>> b0a0f2e7019fbab2cc99b32d4a46925f8a544d0d


    </div>
  );
}

export default Page;




