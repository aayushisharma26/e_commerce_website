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
    <div className="row">
      {categoryData.slice(0, 4).map((item, index) => (
        <div className="col-md-3" key={index}>
          <div style={{ border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
            {/* <h1>{item.title}</h1> */}
            <img src={item.image} alt={item.title} className="img-fluid" style={{ border: '1px solid red', width: "10%" }} />
          </div>
        </div>
      ))}
    </div>
  );

  const electronicData = data.filter((item) => item.category === "electronics").slice(0, 4);
  const jeweleryData = data.filter((item) => item.category === "jewelery").slice(0, 4);
  const womensData = data.filter((item) => item.category === "women's clothing").slice(0, 4);

  return (
    <div className="container">
      <div className="row">
        {renderCategoryRow(electronicData)}
        {renderCategoryRow(jeweleryData)}
        {renderCategoryRow(womensData)}
      </div>
    </div>
  );
}

export default Page;

