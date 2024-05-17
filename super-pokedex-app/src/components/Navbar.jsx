import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="header-container">
        <img
          src="/images/pokedevlogo.png"
          alt="pokedex-logo"
          className="navbar-img"
        />
      </div>
      <div className="main-container">
        <Link to="/" className="navbar-link navbar-button">Home</Link>
        <Link to="/favorites" className="navbar-link navbar-button">Favorites</Link>
        <Link to="/add" className="navbar-link navbar-button">Create the Beast</Link>
      </div>
    </div>
  );
};

export default Navbar;