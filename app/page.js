"use client";
import './home.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from './carousel';

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
      jewelery: data.filter((item) => item.category === "jewelery").slice(0, 4),
      womens_clothing: data.filter((item) => item.category === "women's clothing").slice(0, 4),
    };

    return (
      <>
        <Carousel/>
        {Object.keys(categories).map((category) => (
          <div key={category} className="row mb-4" id="category">
            {categories[category].map((item) => (
              <div key={item.id} className="col-md-3 mb-4 "  >
                <div className='product' >
                  <Link href={`/product/${item.id}`} passHref>
                      <img
                        src={item.image}
                        // alt={item.title}
                        id="image"
                      />
                  </Link>
                  <div className="p-3">
                    {/* <h6>{item.title}</h6> */}
                    <p>Price: ${item.price}</p>
                    <p>ID: {item.id}</p>
                  </div>
                </div>
              </div>
            ))}
            <Link href={`/product_list/${category}`}>
              View All
            </Link>
          </div>
        ))}
      </>
    );
  };
  return <>{renderCategoryRows()}</>;
}
export default Page;



