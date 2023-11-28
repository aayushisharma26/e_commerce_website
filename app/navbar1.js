import React from "react";

function Navbar1() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: "#4B429E", height: "54px", margin: "13px" }}>
        {/* Use the <img> tag to display the image */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws27MDkRYwBLQf2llMfC3eSvjQ3WF8C6fNw&usqp=CAU" alt="Logo" style={{ width: "50px", height: "50px" }} />

        <form className="d-flex" role="search" style={{ marginLeft: "365px" }}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar1;
