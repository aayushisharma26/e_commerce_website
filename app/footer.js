import React from "react";
import './footer.css'
function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-white style " >
        <div>
        <img src='/navgurukul.png' />
        </div  > 
        <div className="text">
          E-Commerce | Class Project
        </div>
        <div className="container pt-4">
          <section className="mb-4">
            <a class='navbar-brand' href='/'>
              <img src='/logo.png' />
            </a>
          </section>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;



<a class='navbar-brand' href='/'>
            <img src='/logo.png' />
          </a>