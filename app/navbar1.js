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
    <nav className="navbar bg-primary" data-bs-theme="white">
      <div className="container-fluid" style={{ height: "60px" }}>
        <div className="d-flex align-items-center">
          <img
            src="https://img.freepik.com/premium-psd/3d-rendering-small-letter-e-with-modern-style_446595-7218.jpg?w=2000"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws27MDkRYwBLQf2llMfC3eSvjQ3WF8C6fNw&usqp=CAU"
            alt="Logo"
            style={{ width: "50px", height: "50px", marginLeft: "20px" }}
          />

          <div className="navbar-brand" aria-current="page">
            <Link href="/electronics" style={{ color: 'black', marginLeft: "50px" }}>Electronics</Link>
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

          <div className="navbar-brand" aria-current="page">
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
          </div>

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
