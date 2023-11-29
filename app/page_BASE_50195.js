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
    <div style={{height:'1000px',border:'solid 2px black', width:'100%'}}>
      {categoryData.slice(0, 4).map((item) => (
        <div key={item.id}>
          <div style={{ border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} className="img-fluid" style={{ border: '1px solid red', width: "100%" }} />
          </div>
        </div>
      ))}
    </div>
  );

  const electronicData = data.filter((item) => item.category === "electronics");
  const jewelryData = data.filter((item) => item.category === "jewelery");
  const womensData = data.filter((item) => item.category === "women's clothing");

  return (
    <>
      {renderCategoryRow(electronicData)}
      {renderCategoryRow(jewelryData)}
      {renderCategoryRow(womensData)}
    </>
  );
}

export default Page;
