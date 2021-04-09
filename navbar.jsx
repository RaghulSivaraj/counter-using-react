import React, { Component } from 'react';

//Stateless functional Component

const Navbar = ({ totalCounters }) => {
    return(
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mb-0 h1">
            Navbar{" "}
          <span className="badge badge-pill badge-secondary">
              {totalCounters}
          </span>
        </a>
      </nav>
    );

}

 
export default Navbar;