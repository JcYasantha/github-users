import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark'>
        <p className='navbar-brand'>
          <Link to='/github-users' className='navbar-brand'>
            <i className='fa fa-github' aria-hidden='true'></i> GithubUsers
          </Link>
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
