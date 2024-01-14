"use client"
import React, { useState, useEffect } from 'react';

function ElectronicProducts() {
  const [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const electronicData = data.filter(product => product.category === 'electronics');

        setElectronicProducts(electronicData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Electronic Products</h1>
      
      {electronicProducts.map(product => (
        <div className='elec' key={product.id} 
        >
    
          <div style={{ width: '600px', height: '600px'}}>
            <img
              src={product.image}
              style={{ width: '400px', height: '500px', borderRadius: '8px' ,marginLeft:"300px",marginTop:"40px",display: 'block'}}
            />
          </div>
          <div style={{  width: "300px", height: "180px", padding: '20px' ,marginRight:"900px", textAlign: 'center' ,border:"solid 2px red"}}>
            <p>Product ID: {product.id}</p>
            <p>Title: {product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ElectronicProducts;
