// import React from "react";
function Navbar1() {
  return (
    <nav class="navbar bg-primary" data-bs-theme="white">
      <div className="container-fluid" style={{ height: "54px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws27MDkRYwBLQf2llMfC3eSvjQ3WF8C6fNw&usqp=CAU" alt="Logo" style={{ width: "50px", height: "50px" }} />

        <div className="d-flex flex-column align-items-center">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:"60px",width:"500px",marginLeft:"300px",backgroundColor:"darkgray"}}></input>
              <button className="btn btn-outline-success" type="submit" style={{height:"60px"}}>Search</button>
                
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar1;




