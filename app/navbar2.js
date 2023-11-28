import React from "react";
import Link from 'next/link';
function Navbar2(){
    return(
        <nav data-mdb-navbar-init className="navbar navbar-expand-lg navbar-light bg-body-tertiary"  >
            <div className="container-fluid bg-secondary" >
                <div className="navbar-brand" aria-current="page" ><Link href="/electronics">Electronics</Link></div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav" >
                <div className="navbar-brand" aria-current="page" ><Link href="/jewellery">Jewellery</Link></div>
                    <div className="navbar-brand" aria-current="page" ><Link href="/mans_cloths">Mans_Cloths</Link> </div>
                    <div className="navbar-brand" aria-current="page" ><Link href="/womans_cloths">Womans_Cloths</Link></div>
                                        
                            
                </div>
                </div>
            </div>
            </nav>
    )
}
export default Navbar2;