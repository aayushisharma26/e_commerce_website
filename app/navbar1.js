import Link from 'next/link';

function Navbar1() {
  return (
    <nav className="navbar bg-primary" data-bs-theme="white">
      <div className="container-fluid" style={{ height: "60px" }}>
        <div className="d-flex align-items-center">
          <img
            src="https://img.freepik.com/premium-psd/3d-rendering-small-letter-e-with-modern-style_446595-7218.jpg?w=2000"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws27MDkRYwBLQf2llMfC3eSvjQ3WF8C6fNw&usqp=CAU"
            alt="Logo"
            style={{ width: "50px", height: "50px" ,marginLeft:"20px"}}
          />

          <div className="navbar-brand" aria-current="page">
            <Link href="/electronics" style={{ color: 'black' ,marginLeft:"50px"}}>Electronics</Link>
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

              }}
            ></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>

    </nav>
  );
}

export default Navbar1;





