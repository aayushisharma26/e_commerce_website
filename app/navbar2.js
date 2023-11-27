import React from "react";
import Link from 'next/link';
function Navbar2(){
    return(
        <nav data-mdb-navbar-init class="navbar navbar-expand-lg navbar-light bg-body-tertiary"  >
            <div class="container-fluid bg-secondary">
                <div class="navbar-brand" aria-current="page" ><Link href="/electronics">Electronics</Link></div>
                {/* <button
                data-mdb-collapse-init
                class="navbar-toggler"
                type="button"
                data-mdb-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <div class="navbar-brand" aria-current="page" ><Link href="/jewellery">Jewellery</Link></div>
                    <div class="navbar-brand" aria-current="page" ><Link href="/mans_cloths">Mans_Cloths</Link> </div>
                    <div class="navbar-brand" aria-current="page" ><Link href="/womans_cloths">Womans_Cloths</Link></div>
                                        
                            
                </div>
                </div>
            </div>
            </nav>
    )
}
export default Navbar2;