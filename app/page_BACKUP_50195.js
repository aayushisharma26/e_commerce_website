<<<<<<< HEAD
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
=======
<<<<<<< HEAD
// "use client"
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
>>>>>>> 093dbae117f7d170cfd2b75b3f86a493602ac722
// }

// export default Page;



<<<<<<< HEAD
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
=======








"use client"


=======
"use client"
>>>>>>> 852e23656377756282b869b25dba432ad5425ebd

>>>>>>> 093dbae117f7d170cfd2b75b3f86a493602ac722
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

<<<<<<< HEAD
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
=======
  const renderCategoryRow = (categoryData) => (
    <div style={{height:'1000px',border:'solid 2px black', width:'100%'}}>
      {categoryData.slice(0, 4).map((item) => (
        <div key={item.id}>
          <div style={{ border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
            {/* <p>{item.title}</p> */}
            <img src={item.image} alt={item.title} className="img-fluid" style={{ border: '1px solid red', width: "10%" }} />
>>>>>>> 093dbae117f7d170cfd2b75b3f86a493602ac722
          </div>
        ))}
      </div>
    ));
  };

  return <>{renderCategoryRows()}</>;
}

export default Page;
<<<<<<< HEAD













=======
>>>>>>> 852e23656377756282b869b25dba432ad5425ebd
