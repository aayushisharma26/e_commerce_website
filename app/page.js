// "use client"
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Cursal from "./cursul"

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
//       <div key={category} className="row mb-4" style={{ border: '1px solid black', borderRadius: '8px' }}>
//         {categories[category].map((item) => (
//           <div key={item.id} className="col-md-3 mb-4">
//             <div style={{ borderRadius: '8px', border: '1px solid black' }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: '350px', height: '300px', borderRadius: '8px' }}
//               />
//               <div className="p-3">
//                 <h6>{item.title}</h6>
//                 <p>Price: ${item.price}</p>
//                 <p>ID: {item.id}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       <Cursal/>
//       </div>
//     ));
//   };

//   return <>{renderCategoryRows()}</>;
// }

// export default Page;







// // "use client"
// // import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import  Electronics_data from './product_data';
// // import  ProductDetail from './product_detail';

// // function Page() {
 
// //   return (
// //     <>
// //        < Electronics_data/>
// //       <ProductDetail/>
// //       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
// //         <div className="carousel-inner">
// //           <div className="carousel-item active">
// //             <img src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=1024x1024&w=is&k=20&c=2POD6qi_onFpGkrDtE5z-Y_ViSuPp5hhszFQ8w44FrA="
// //               className="d-block w-100" alt="First slide" style={{ height: '300px', width: "500px" }} />
// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://www.hunarcourses.com/blog/wp-content/uploads/2021/01/bridal-jewellery-1-1024x1024.jpg"
// //               className="d-block w-100" alt="Second slide" style={{ height: '300px', width: "500px" }} />
// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
// //               className="d-block w-100" alt="Third slide" style={{ height: '300px', width: "500px" }} />
// //           </div>
// //         </div>
// //       </div>

// //       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



     
// //     </>
// //   );
// // }

// // export default Page;



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
//       <div key={category} className="row mb-4" style={{ border: '1px solid black', borderRadius: '8px' }}>
//         {categories[category].map((item) => (
//           <div key={item.id} className="col-md-3 mb-4">
//             <div style={{ borderRadius: '8px', border: '1px solid black' }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: '350px', height: '300px', borderRadius: '8px' }}
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

//   return (
//     <div>
//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=1024x1024&w=is&k=20&c=2POD6qi_onFpGkrDtE5z-Y_ViSuPp5hhszFQ8w44FrA="
//               className="d-block w-100"
//               alt="First slide"
//               style={{ height: '300px', width: '500px' }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://www.hunarcourses.com/blog/wp-content/uploads/2021/01/bridal-jewellery-1-1024x1024.jpg"
//               className="d-block w-100"
//               alt="Second slide"
//               style={{ height: '300px', width: '500px' }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
//               className="d-block w-100"
//               alt="Third slide"
//               style={{ height: '300px', width: '500px' }}
//             />
//           </div>
//         </div>
//       </div>

//       {renderCategoryRows()}
//     </div>
//   );
// }

// export default Page;

"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cursal from "./cursul";

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
        <Cursal />
        {Object.keys(categories).map((category) => (
          <div key={category} className="row mb-4" style={{ border: '1px solid black', borderRadius: '8px' }}>
            {categories[category].map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div style={{ borderRadius: '8px', border: '1px solid black' }}>
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
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };

  return <>{renderCategoryRows()}</>;
}

export default Page;



