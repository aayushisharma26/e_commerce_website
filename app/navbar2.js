// import React from "react";
// import Link from 'next/link';

// function Navbar2() {
//   return (
//     <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light bg-light bg-gradient text-dark">
//       <div className="container-fluid">
//         <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-22VW5KpkUTF9CYAwD3_Myno_EGW3RgAOgvct9RRMOSHWTZF1_hMlcohXePu71QVwwQ&usqp=CAU" style={{ height: "80px", width: "80px" }} />
//           <div className="d-flex flex-column align-items-center">
//             <Link href="/electronics" className="text-blue">Electronics</Link>
//           </div>
//         </div>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
//               <img src="https://c8.alamy.com/comp/T0E858/jewelry-diamond-rings-and-necklaces-show-in-luxury-retail-store-window-display-showcase-T0E858.jpg" style={{height:"80px",width:"80px"}}/>
//               <div className="d-flex flex-column align-items-center">
//                 <Link href="/jewellery" className="text-blue" >Jewellery</Link>
//               </div>
//             </div>
//             <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
//               <div className="d-flex flex-column align-items-center">
//                 <img src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?b=1&s=170667a&w=0&k=20&c=H5hgZid5Aji924X_NLc4t7zt1v5Qza_e33XI2VdgrlU=" style={{height:"80px",width:"80px"}}/>
//                 <Link href="/mans_cloths" className="text-blue" >Mans_Cloths</Link>
//               </div>
//             </div>
//             <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
//               <div className="d-flex flex-column align-items-center">
//                 <img src="https://i.ytimg.com/vi/7Z-JWF5zv28/mqdefault.jpg" style={{height:"80px",width:"80px"}}/>
//                 <Link href="/womans_cloths" className="text-blue" >Womans_Cloths</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar2;


import React from "react";
import Link from 'next/link';

function Navbar2() {
  return (
    <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light bg-light bg-gradient text-dark">
      <div className="container-fluid">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkB56a3B6XU-hPrMFPE1HjiLIGuMI6GSgkg&usqp=CAU" style={{height:"60px",width:"60px"}}/>
        </div>
        <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page" style={{marginLeft:"20px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-22VW5KpkUTF9CYAwD3_Myno_EGW3RgAOgvct9RRMOSHWTZF1_hMlcohXePu71QVwwQ&usqp=CAU" style={{ height: "70px", width: "70px" }} />
          <div className="d-flex flex-column align-items-center">
            <Link href="/electronics" className="text-blue">Electronics</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <img src="https://media.istockphoto.com/id/1147912347/photo/portrait-of-a-indian-bride-in-studio-light-asian-bride.jpg?s=1024x1024&w=is&k=20&c=8a9k-6Pkt8Yq3c5fwp56c7K2_-8FYRldEeO4KXNCqWw=" style={{height:"70px",width:"70px"}}/>
              <div className="d-flex flex-column align-items-center">
                <Link href="/jewellery" className="text-blue" >Jewellery</Link>
              </div>
            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <div className="d-flex flex-column align-items-center">
                <img src="https://www.shutterstock.com/shutterstock/photos/424418203/display_1500/stock-photo-smiling-young-businessman-in-store-424418203.jpg" style={{height:"70px",width:"70px"}}/>
                <Link href="/mans_cloths" className="text-blue" >Mans_Cloths</Link>
              </div>
            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <div className="d-flex flex-column align-items-center">
                <img src="https://4.imimg.com/data4/JQ/SD/ANDROID-25372846/product-500x500.jpeg" style={{height:"70px",width:"70px"}}/>
                <Link href="/womans_cloths" className="text-blue" >Womans_Cloths</Link>
              </div>
            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <div className="d-flex flex-column align-items-center">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:"60px",width:"500px",marginTop:"20px",marginLeft:"300px",backgroundColor:"darkgray"}}></input>
                  <button className="btn btn-outline-success" type="submit" style={{height:"60px",marginTop:"20px"}}>Search</button>
                
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;

