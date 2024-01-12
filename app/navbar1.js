"use client"
import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar1() {
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
          {/* <img
            // src="https://img.freepik.com/premium-psd/3d-rendering-small-letter-e-with-modern-style_446595-7218.jpg?w=2000"
            src="https://www.figma.com/file/e5Qdw2m4b9GkkXD2lxqs77/_share---Navgurukul%40E-commerce-Project?type=design&node-id=0-438&mode=design&t=07PW4mWlSOKv5smf-4"
            alt="Logo"
            style={{ width: "50px", height: "50px", marginLeft: "20px" }}
          />
 */}
          <a href="/your-link-url">
            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="56" height="56" rx="28" fill="#FBE9A9"/>
              <path d="M28.7676 39.58C26.0223 39.58 23.6636 39.0387 21.6916 37.956C19.7196 36.8347 18.1923 35.3267 17.1096 33.432C16.0656 31.4987 15.5436 29.2947 15.5436 26.82C15.5436 24.4613 16.1429 22.3153 17.3416 20.382C18.5403 18.4487 20.1449 16.902 22.1556 15.742C24.1663 14.582 26.4089 14.002 28.8836 14.002C32.0543 14.002 34.6836 14.93 36.7716 16.786C38.8596 18.642 40.2709 21.194 41.0056 24.442L21.2276 31.402L19.9516 28.212L36.1916 22.296L35.0316 23.05C34.5676 21.774 33.7943 20.672 32.7116 19.744C31.6289 18.7773 30.2176 18.294 28.4776 18.294C27.0083 18.294 25.6936 18.6613 24.5336 19.396C23.3736 20.092 22.4649 21.0587 21.8076 22.296C21.1503 23.5333 20.8216 24.9447 20.8216 26.53C20.8216 28.1927 21.1696 29.662 21.8656 30.938C22.5616 32.1753 23.5089 33.1613 24.7076 33.896C25.9449 34.592 27.3369 34.94 28.8836 34.94C29.9276 34.94 30.9329 34.7467 31.8996 34.36C32.9049 33.9733 33.8329 33.4707 34.6836 32.852L37.1776 36.854C35.9789 37.666 34.6256 38.3233 33.1176 38.826C31.6483 39.3287 30.1983 39.58 28.7676 39.58Z" fill="#3722D3"/>
            </svg>
          </a>

          <div className="navbar-brand" aria-current="page">
            <Link href="/electronics" style={{ color: 'black', marginLeft: "20px" }}>Electronics</Link>
          </div>

          <div className="navbar-brand" aria-current="page">
            <Link href="/jewellery" style={{ color: 'black' }}>Jewellery</Link>
          </div>

          <div className="navbar-brand" aria-current="page">
            <Link href="/mans_cloths" style={{ color: 'black' }}>Mans_Cloths</Link>
          </div>

          <div className="navbar-brand" aria-current="page">
            <Link href="/womans_cloths" style={{ color: 'black' }}>Womans_Cloths</Link>
          </div>

          <div className="d-flex">
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  height: "60px",
                  width: "500px",
                  marginLeft: "120px"
                }}
              ></input>
              <button type='submit'>Submit</button>
            </form>
          </div>

          {/* <div className="navbar-brand" aria-current="page">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'black', marginLeft: "300px" }}
                onClick={toggleAccountDropdown}
              >
                My Account
              </a>

              <ul
                className={`dropdown-menu ${showAccountDropdown ? 'show' : ''}`}
                aria-labelledby="accountDropdown"
                style={{ marginLeft: "100px" }}
              >
                <li><Link href="/my_account">Profile</Link></li>
                <li><Link href="/my_orders">My Orders</Link></li>
                <li><Link href="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>

          <div className="navbar-brand" aria-current="page">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="moreDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'black', marginLeft: "10px" }}
                onClick={toggleMoreDropdown}
              >
                More
              </a>

              <ul
                className={`dropdown-menu ${showMoreDropdown ? 'show' : ''}`}
                aria-labelledby="moreDropdown"
              >
                <li><Link href="/category1">Category 1</Link></li>
                <li><Link href="/category2">Category 2</Link></li>
                <li><Link href="/category3">Category 3</Link></li>
              </ul>
            </div>
          </div> */}

          <div className="navbar-brand" aria-current="page">
            <Link href="/add_cart" style={{ color: 'black' }}>
              <img
                src="https://assets.dryicons.com/uploads/icon/preview/2664/small_1x_shopping_cart.png"
                style={{ width: "40px" }}
                alt="Cart Icon"
              />
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
