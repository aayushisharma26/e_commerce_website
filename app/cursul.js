// "use client"
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Cursal() {
 
//   return (
//     <>

//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner" style={{border:'solid 3px black'}}>
//           <div className="carousel-item active" >
//             <img src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=1024x1024&w=is&k=20&c=2POD6qi_onFpGkrDtE5z-Y_ViSuPp5hhszFQ8w44FrA="
//               className="d-block w-100" alt="First slide" style={{ height: '500px'}} />
//           </div>
//           <div className="carousel-item">
//             <img src="https://i.ytimg.com/vi/z5knyvUvd_E/sddefault.jpg"
//               className="d-block w-100" alt="Second slide" style={{ height: '500px'}} />
//           </div>
//           <div className="carousel-item">
//             <img src="https://www.southjewellery.com/wp-content/uploads/2022/04/diamond-jewellery-vega-sri.jpg"
//               className="d-block w-100" alt="Third slide" style={{ height: '500px' }} />
//           </div>
//         </div>
//       </div>

//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



     
//     </>
//   );
// }

// export default Cursal;


// "use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cursal() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ border: 'solid 3px black' }}>
          <div className="carousel-item active" style={{height:"400px"}}>
            <img
              src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=1024x1024&w=is&k=20&c=2POD6qi_onFpGkrDtE5z-Y_ViSuPp5hhszFQ8w44FrA="
              className="d-block w-100 img-fluid"
              alt="First slide"
              style={{ height: '500px' }}
            />
          </div>
          <div className="carousel-item" style={{height:"400px"}}>
            <img
              src="https://i.ytimg.com/vi/z5knyvUvd_E/sddefault.jpg"
              className="d-block w-100 img-fluid"
              alt="Second slide"
              style={{ height: '500px' }}
            />
          </div>
          <div className="carousel-item" style={{height:"400px"}}>
            <img
              src="https://images.meesho.com/images/products/243061609/09ibc_512.webp"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              style={{ height: '500px' }}
            />
          </div>

          <div className="carousel-item" style={{height:"400px"}}>
            <img
              src="https://res.cloudinary.com/blingvine1/image/fetch/w_1200,h_628,c_pad,b_auto/http://blingvine.com/cdn/shop/articles/25-nature-inspired-jewellery-designs-for-spring-2021-215773_84ec3628-a16c-40c2-8010-6d34d48b17a0.jpg?v=1636561610"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              style={{ height: '500px' }}
            />
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Cursal;



