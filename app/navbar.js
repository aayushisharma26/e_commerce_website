"use client";
import Link from 'next/link';
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
    <nav className="navbar .bg-light" data-bs-theme="white">
      <div className="container-fluid" style={{ height: "60px" }}>
        <div className="d-flex align-items-center">
          <a href="/your-link-url">
            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="56" height="56" rx="28" fill="#FBE9A9"/>
              <path d="M28.7676 39.58C26.0223 39.58 23.6636 39.0387 21.6916 37.956C19.7196 36.8347 18.1923 35.3267 17.1096 33.432C16.0656 31.4987 15.5436 29.2947 15.5436 26.82C15.5436 24.4613 16.1429 22.3153 17.3416 20.382C18.5403 18.4487 20.1449 16.902 22.1556 15.742C24.1663 14.582 26.4089 14.002 28.8836 14.002C32.0543 14.002 34.6836 14.93 36.7716 16.786C38.8596 18.642 40.2709 21.194 41.0056 24.442L21.2276 31.402L19.9516 28.212L36.1916 22.296L35.0316 23.05C34.5676 21.774 33.7943 20.672 32.7116 19.744C31.6289 18.7773 30.2176 18.294 28.4776 18.294C27.0083 18.294 25.6936 18.6613 24.5336 19.396C23.3736 20.092 22.4649 21.0587 21.8076 22.296C21.1503 23.5333 20.8216 24.9447 20.8216 26.53C20.8216 28.1927 21.1696 29.662 21.8656 30.938C22.5616 32.1753 23.5089 33.1613 24.7076 33.896C25.9449 34.592 27.3369 34.94 28.8836 34.94C29.9276 34.94 30.9329 34.7467 31.8996 34.36C32.9049 33.9733 33.8329 33.4707 34.6836 32.852L37.1776 36.854C35.9789 37.666 34.6256 38.3233 33.1176 38.826C31.6483 39.3287 30.1983 39.58 28.7676 39.58Z" fill="#3722D3"/>
            </svg>
          </a>

          <div className="navbar-brand" aria-current="page">
            <Link href="/electronics" style={{ color: 'blue', marginLeft: "20px",fontFamily:'Inika',textDecoration: 'none' }}>Electronics</Link>
          </div>

          <div className="navbar-brand" aria-current="page">
            <Link href="/jewellery" style={{ color: 'blue',fontFamily:'Inika',textDecoration: 'none' }}>Jewellery</Link>
          </div>

          <div className="navbar-brand" aria-current="page">
            <Link href="/mans_cloths" style={{ color: 'blue',fontFamily:'Inika',textDecoration: 'none' }}>Mans_Cloths</Link>
          </div>

          <div className="navbar-brand" >
            <Link href="/womans_cloths" style={{ color: 'blue',fontFamily:'Inika',textDecoration: 'none' }}>Womans_Cloths</Link>
          </div>

          <div className="d-flex">
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  height: "44px",
                  width: "321px",
                  marginLeft: "850px"
                }}
              ></input>
              <button >
                <img
                src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"
                style={{ width: "15px", height: '5', color: 'blue' }}
                alt="Cart Icon"
              /></button>
            </form>
          </div>


          <div className="navbar-brand" aria-current="page">
            <Link href="/add_cart" style={{ color: 'blue', fontFamily:'Inika' }}>
              <img
                src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-shopping-cart-icon-image_1166717.jpg"
                style={{ width: "40px" }}
                alt="Cart Icon"
              />
              My Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
