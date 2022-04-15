import React from "react";
import { NavLink } from "react-router-dom"; //npm install axios react-router-dom

const Navbar = () => {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand">auth-site</span>

            <div clasName="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                {/* <NavLink className="nav-link" to="/posts">
                  Posts
                </NavLink> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );}
;
export default Navbar;