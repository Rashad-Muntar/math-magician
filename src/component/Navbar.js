import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-wrapper">
    <div className="content-wrapper">
      <h3>Math Magician</h3>
      <div className="items">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Daily Quote</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
