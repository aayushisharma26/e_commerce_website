// "use client";
// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// function Page({ params }) {
  
//   const [productDetails, setProductDetails] = useState(null);

//   const fetchProductDetails = () => {
//     fetch(`https://fakestoreapi.com/products/${params.pid}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setProductDetails(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [params.pid]);

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }



//   const addCart=()=>{
//     Cookies.set("poooja","binjawa")

//   }
//   return (
//     <div style={{ border: "solid 2px red" }}>
//       <h1>Product Details-</h1>
//       <img
//         src={productDetails.image}
//         style={{ width: '350px', height: '300px', borderRadius: '8px' }}
//       />
//       <p>Product ID: {productDetails.id}</p>
//       <p>Title: {productDetails.title}</p>
//       <button  className="btn btn-success" onClick={()=>addCart(productDetails)}>ADD TO CART</button>
//       <button  className="btn btn-success" >BUY NOW</button>


//     </div>
//   );
// }

// export default Page;






"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './product.css';

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
    Cookies.set("poooja","binjawa")

  }
  return (
    <div className='container'>
      <div className='imagee'>
        <img
          src={productDetails.image}
          alt={productDetails.title}
        />
      </div>

      <div className='data'>
        <h1>Product Details</h1>
        <p>Product ID: {productDetails.id}</p>
        <p>Title: {productDetails.title}</p>
        <button  className="btn btn-success" >ADD TO CART</button>

      </div>
    </div>
  
  );
}

export default Page;





