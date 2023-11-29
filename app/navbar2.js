import React from "react";
import Link from 'next/link';

function Navbar2() {
  return (
    <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light bg-light bg-gradient text-dark">
      <div className="container-fluid">
        <div className="navbar-brand" aria-current="page">
          <Link  href="/electronics" class="text-dark" >Electronics</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-brand" aria-current="page">
              <Link href="/jewellery" class="text-dark" style={{marginLeft:'40px'}}>Jewellery</Link>
            </div>
            <div className="navbar-brand" aria-current="page">
              <Link href="/mans_cloths" class="text-dark" style={{marginLeft:'40px'}}>Mans_Cloths</Link>
            </div>
            <div className="navbar-brand" aria-current="page">
              <Link href="/womans_cloths" class="text-dark" style={{marginLeft:'40px'}}>Womans_Cloths</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;