import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark'>
        <p className='navbar-brand'>
          <i className='fa fa-github' aria-hidden='true'></i> GithubUsers
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
