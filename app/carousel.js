
import React from 'react';
import './carousel.css';

function Carousel() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel" >
          <div className="carousel-item active" >
            <img
              src="https://img.freepik.com/free-psd/urban-fashion-banner-template_23-2148652498.jpg?w=1480&t=st=1705329912~exp=1705330512~hmac=b0ec8fc21d65020b26b822c5579f0354f2c14919f22a7aeae3134bedd0aa7b72"
              className="d-block w-100 img-fluid"
              alt="First slide"
              id="item"
            />
          </div>
          {/* <div className="carousel-item" >
            <img
              src="https://i.pinimg.com/originals/a8/e4/22/a8e422092e51a105cb09e09d80a7ce72.jpg"
              className="d-block w-100 img-fluid"
              alt="Second slide"
              id="item"
            />
          </div> */}
          {/* <div className="carousel-item">
            <img
              src="https://www.fatbit.com/fab/wp-content/uploads/2015/03/Online-Jewelry-Shopping-Store-main.jpg"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              id="item"
            />
          </div> */}

          {/* <div className="carousel-item">
            <img
              src="https://www.tutorialrepublic.com/snippets/designs/product-list-carousel-for-ecommerce-website.png"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              id="item"
            />
          </div> */}
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Carousel;



