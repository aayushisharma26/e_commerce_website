// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  Electronics_data from './product_data';
// import  ProductDetail from './product_detail';

// function Page() {
//   return (
//     <div>
//       < Electronics_data/>
//       <ProductDetail/>



//     </div>
//   )
// }

// export default Page;











"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategoryRow = (categoryData) => (
    <div style={{border:'4px solid red'}}>
      {categoryData.slice(0, 4).map((item, index) => (
        <div style={{border:'4px solid red'}} key={index}>
          {/* <h1>{item.title}</h1> */}
          <img src={item.image} alt={item.title} className="img-fluid" />
        </div>
      ))}
    </div>
  );

  const electronicData = data.filter((item) => item.category === "electronics");
  const jeweleryData = data.filter((item) => item.category === "jewelery");
  const womensData = data.filter((item) => item.category === "women's clothing");

  return (
    <>
      {renderCategoryRow(electronicData)}
      {renderCategoryRow(jeweleryData)}
      {renderCategoryRow(womensData)}
    </>
  );
}

export default Page;


