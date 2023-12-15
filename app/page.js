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

  const renderCategoryRows = () => {
    const categories = {
      electronics: data.filter((item) => item.category === "electronics").slice(0, 4),
      jewelry: data.filter((item) => item.category === "jewelery").slice(0, 4),
      womensClothing: data.filter((item) => item.category === "women's clothing").slice(0, 4),
    };
    return (
      <>
       

        <Home/>


        
      </>
    );
  };
  return <>{renderCategoryRows()}</>;
}
export default Page;
