// import React from "react";

// function Navbar1(){
//     return(
//         <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <form class="d-flex" role="search">
//       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//       <button class="btn btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     )
// }
// export default Navbar1;

import React from "react";


function Navbar1() {
  return (
    <nav class="navbar bg-primary" data-bs-theme="white">
      <div className="container-fluid" style={{ height: "54px" }}>
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




