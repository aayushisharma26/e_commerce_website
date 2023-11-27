import React from "react";

function Navbar2(){
    return(
        <nav data-mdb-navbar-init class="navbar navbar-expand-lg navbar-light bg-body-tertiary"  >
            <div class="container-fluid bg-secondary">
                <a class="navbar-brand" href="#">Navbar</a>
                <button
                data-mdb-collapse-init
                class="navbar-toggler"
                type="button"
                data-mdb-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled"></a>
                            
                </div>
                </div>
            </div>
            </nav>
    )
}
export default Navbar2;