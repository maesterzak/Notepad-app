import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'



function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-warning text-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React NotePad 
            </Link>
            <button
            //   onClick={ToggleNavbar}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              {/* <FontAwesomeIcon
                size={"2x"}
                color="white"
                icon={navbar ? faTimes : faBars}
              /> */}
            </button>
            

            
            
          </div>
        </nav>
        </>
    )
}
export default Navbar;