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
import Product from "./product";
import Link from 'next/link';

function Navbar2() {
  return (
    <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-black bg-red bg-blue text-dark" style={{  height:"80px",marginTop:"40px"}}>
      <div className="container-fluid" >
        <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-22VW5KpkUTF9CYAwD3_Myno_EGW3RgAOgvct9RRMOSHWTZF1_hMlcohXePu71QVwwQ&usqp=CAU" style={{ height: "40px", width: "40px" }} />
          <div className="d-flex flex-column align-items-center">
            <Link href="/electronics" className="text-black">Electronics</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <img src="https://media.istockphoto.com/id/1147912347/photo/portrait-of-a-indian-bride-in-studio-light-asian-bride.jpg?s=1024x1024&w=is&k=20&c=8a9k-6Pkt8Yq3c5fwp56c7K2_-8FYRldEeO4KXNCqWw=" style={{height:"40px",width:"40px"}}/>
              <div className="d-flex flex-column align-items-center">
                <Link href="/jewellery" className="text-black" >Jewellery</Link>
              </div>
            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <div className="d-flex flex-column align-items-center">
                <img src="https://www.shutterstock.com/shutterstock/photos/424418203/display_1500/stock-photo-smiling-young-businessman-in-store-424418203.jpg" style={{height:"40px",width:"40px"}}/>
                <Link href="/mans_cloths" className="text-black" >Mans_Cloths</Link>
              </div>
            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              <div className="d-flex flex-column align-items-center">
                <img src="https://4.imimg.com/data4/JQ/SD/ANDROID-25372846/product-500x500.jpeg" style={{height:"40px",width:"40px"}}/>
                <Link href="/womans_cloths" className="text-black" >Womans_Cloths {<Product/>}</Link>
                
                
              </div>

            </div>
            <div className="navbar-brand d-flex flex-column align-items-center" aria-current="page">
              

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;

