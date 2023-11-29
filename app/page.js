// "use client"
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Page() {
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const renderCategoryRows = () => {
//     const categories = {
//       electronics: data.filter((item) => item.category === "electronics").slice(0, 4),
//       jewelry: data.filter((item) => item.category === "jewelery").slice(0, 4),
//       womensClothing: data.filter((item) => item.category === "women's clothing").slice(0, 4),
//     };

//     return Object.keys(categories).map((category) => (
//       <div key={category} className="row mb-4" style={{border:'soid 1px black',borderRadius: '8px'}}>
//         {categories[category].map((item) => (
//           <div key={item.id} className="col-md-3 mb-4">
//             <div style={{  borderRadius: '8px' }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: '450px', height: '400px',borderRadius: '8px'}}
//               />
//               <div className="p-3">
//                 <h6>{item.title}</h6>
//                 <p>Price: ${item.price}</p>
//                 <p>ID: {item.id}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   return <>{renderCategoryRows()}</>;
// }

// export default Page;



// "use client"
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Page() {
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const renderCategoryRows = () => {
//     const categories = {
//       electronics: data.filter((item) => item.category === "electronics").slice(0, 4),
//       jewelry: data.filter((item) => item.category === "jewelery").slice(0, 4),
//       womensClothing: data.filter((item) => item.category === "women's clothing").slice(0, 4),
//     };

//     return Object.keys(categories).map((category) => (
//       <div key={category} className="row mb-4" style={{borderRadius: '8px',border:"solid 1px black "}}>
//         {categories[category].map((item) => (
//           <div key={item.id} className="col-md-3 mb-4">
//             <div style={{ borderRadius: '8px' ,border:"solid 1px black ",borderRadius: '8px'}}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: '400px', height: '300px', borderRadius: '8px'}}
//               />
//               <div className="p-3">
//                 <h6>{item.title}</h6>
//                 <p>Price: ${item.price}</p>
//                 <p>ID: {item.id}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   return <>{renderCategoryRows()}</>;
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

  const renderCategoryRows = () => {
    const categories = {
      electronics: data.filter((item) => item.category === "electronics").slice(0, 4),
      jewelry: data.filter((item) => item.category === "jewelery").slice(0, 4),
      womensClothing: data.filter((item) => item.category === "women's clothing").slice(0, 4),
    };

    return Object.keys(categories).map((category) => (
      <div key={category} className="row mb-4">
        {categories[category].map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="border border-primary p-3 rounded">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '300px',borderRadius: '8px' }}
              />
              <div className="p-3">
                <h6>{item.title}</h6>
                <p>Price: ${item.price}</p>
                <p>ID: {item.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return <>{renderCategoryRows()}</>;
}

export default Page;
