import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Home() {
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
      "women's clothing": data.filter((item) => item.category === "women's clothing").slice(0, 4),
    };

    return (
      <>
        {/* ... (your existing code) ... */}
        {Object.keys(categories).map((category) => (
          <div key={category} className="row mb-4" style={{ border: '1px solid black', borderRadius: '8px' }}>
            {categories[category].map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div style={{ borderRadius: '8px', border: '1px solid black' }}>
                <Link href={`/product_list/${category}`} passHref>
                    {/* <a> */}
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
                      />
                    {/* </a> */}
                  </Link>
                  {/* <Link href={`/product_list/${category}`}>
                    
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
                      />
                    
                  </Link> */}
                  <div className="p-3">
                    <h6>{item.title}</h6>
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

export default Home;
