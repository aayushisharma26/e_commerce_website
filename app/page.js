"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Electronics_data from './product_data';
import  ProductDetail from './product_detail';

function Page() {
 
  return (
    <>
       < Electronics_data/>
      <ProductDetail/>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=1024x1024&w=is&k=20&c=2POD6qi_onFpGkrDtE5z-Y_ViSuPp5hhszFQ8w44FrA="
              className="d-block w-100" alt="First slide" style={{ height: '300px', width: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src="https://www.hunarcourses.com/blog/wp-content/uploads/2021/01/bridal-jewellery-1-1024x1024.jpg"
              className="d-block w-100" alt="Second slide" style={{ height: '300px', width: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              className="d-block w-100" alt="Third slide" style={{ height: '300px', width: "500px" }} />
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



     
    </>
  );
}

export default Page;













