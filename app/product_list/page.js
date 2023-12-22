"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Product_list() {
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

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col-md-3 mb-4">
          <div style={{ borderRadius: '8px', border: '1px solid black' }}>
            <Link to={`/product_list/${item.id}`} className="product-link">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '350px', height: '300px', borderRadius: '8px' }}
              />
              <div className="p-3">
                <h6>{item.title}</h6>
                <p>Price: ${item.price}</p>
                <p>ID: {item.id}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product_list;





