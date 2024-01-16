"use client";
import Link from 'next/link';
import './navbar.css';
import { useState } from 'react';
import { Inika } from 'next/font/google';

function Navbar() {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
  };

  return (
    <nav className="navbar .bg-light" data-bs-theme="white"  >
      {/* <div className="container-fluid" id="navbar" > */}
        <div className="d-flex align-items-center " id="navbar"  >
          <a href='/'><img src="Frame 49 (1).png" ></img></a>
              <div className="navbar-brand" aria-current="page" >
                <Link href="/product_list/electronics" id="electronics" >Electronics</Link>
              </div>
              <div className="navbar-brand" aria-current="page">
                <Link href="/product_list/jewelery" id="jewellery">Jewellery</Link>
              </div>
              <div className="navbar-brand" aria-current="page">
                <Link href="/product_list/men's clothing" id="mens_cloths">Mans_Cloths</Link>
              </div>
              <div className="navbar-brand" >
                <Link href="/product_list/women's clothing" id="womans_cloths" >Womans_Cloths</Link>
              </div>
              <div className="d-flex"  >
                <form className="d-flex" >
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='image'
                  ></input>
                  <button >
                    <img
                    src="Search.png"
                  />
                  </button>
                </form>
              </div>
              <div className="navbar-brand" aria-current="page">
                <Link href="/add_cart" id="cart">
                  <img
                    src="Cart.png"
                  />
                  My Cart
                </Link>
              </div>
        </div>
      {/* </div> */}
    </nav>
  );
}
export default Navbar;
