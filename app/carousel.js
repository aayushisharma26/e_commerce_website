
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cursal() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ border: 'solid 1px black' }}>
          <div className="carousel-item active" style={{height:"488px",width: '1200'}}>
            <img
              src="https://cdn11.bigcommerce.com/s-5pywdu4iq7/images/stencil/original/carousel/409/mens_winter_sale_carousel.png?c=2"
              className="d-block w-100 img-fluid"
              alt="First slide"
              style={{ height: '488px' }}
            />
          </div>
          <div className="carousel-item" style={{height:"488px",width: '1200'}}>
            <img
              src="https://i.pinimg.com/originals/a8/e4/22/a8e422092e51a105cb09e09d80a7ce72.jpg"
              className="d-block w-100 img-fluid"
              alt="Second slide"
              style={{ height: '488px' }}
            />
          </div>
          <div className="carousel-item" style={{height:"488px",width: '1200'}}>
            <img
              src="https://images.meesho.com/images/products/243061609/09ibc_512.webp"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              style={{ height: '488px' }}
            />
          </div>

          <div className="carousel-item" style={{height:"488px",width: '1200'}}>
            <img
              src="https://www.sliderrevolution.com/wp-content/uploads/2023/03/websites-with-carousels.jpg"
              className="d-block w-100 img-fluid"
              alt="Third slide"
              style={{ height: '488px' }}
            />
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Cursal;



