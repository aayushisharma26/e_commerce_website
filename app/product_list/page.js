//main code
// "use client"

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Product_list() {
//   return (
//     <>
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3 mb-4">
//           <div className="border border-secondary p-3" style={{ borderRadius: '5px' ,height: '400px' }}>
//           </div>
//         </div> 
//       </div> 
//     </div>
  
//   </>
//   );
// }

// export default Product_list;






"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function ProductList() {
  const router = useRouter();
  const { category } = router.query;
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryProducts(res);
        setFilteredProducts(res); // Initialize filteredProducts with all products
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [category]);

  // Function to handle filtering by price
  const handleFilterByPrice = (minPrice, maxPrice) => {
    const filtered = categoryProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container-fluid">
      {/* Add filter options, e.g., a price range input */}
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          onChange={(e) => handleFilterByPrice(Number(e.target.value), Number(e.target.value))}
        />
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          onChange={(e) => handleFilterByPrice(Number(e.target.value), Number(e.target.value))}
        />
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
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

export default ProductList;























