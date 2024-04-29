import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/employee" className="nav-link">Employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
