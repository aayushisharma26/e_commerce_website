import React from "react";

function Footer() {
  return (
    <div class="container my-5">
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#929fba" }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a class="text-white">MDBootstrap</a>
                </p>
                {/* ... (other product links) ... */}
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                {/* ... (contact information) ... */}
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                {/* ... (social media links) ... */}
              </div>
            </div>
          </section>
        </div>

        <div>
          <a
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
          </a>
          <a class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
