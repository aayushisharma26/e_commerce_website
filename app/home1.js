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
        
        {Object.keys(categories).map((category) => (
          <div key={category} className="row mb-4" style={{borderRadius: '8px',border:"solid 2px red",width:"100%" }}>
            {categories[category].map((item) => (
              <div  key={item.id} className="col-md-3 mb-4" >
              <Link href={`/product/${item.id}`} passHref>
                    <div  style={{borderRadius: '32px'}}>
                    
                        <img className="hover-opacity"
                        src={item.image}
                        alt={item.title}
                        style={{ width: '400px', height: '500px', borderRadius: '8px'}}
                        />

                        <p>Price: ${item.price}</p>
                        <p >ID: {item.id}</p>
                    </div>
                    
                  </Link>
                  
                  
                  
                  
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
