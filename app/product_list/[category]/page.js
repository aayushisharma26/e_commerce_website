"use client"
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Page({ params }) {
  const { category } = params;
  const [categoryData, setCategoryData] = useState([]);

  const fetchCategoryData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // Filter products based on the specified category
        const filteredData = data.filter((item) => item.category.toLowerCase() === category.toLowerCase());
        setCategoryData(filteredData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  if (!categoryData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category} Products</h1>
      {categoryData.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            style={{ width: '100px', height: '100px', borderRadius: '8px' }}
            alt={item.title}
          />
          <p>Product ID: {item.id}</p>
          <p>Title: {item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;

  
  
  
