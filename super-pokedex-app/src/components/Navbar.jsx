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
        <Link to="/" className="btn">Home</Link>
        <Link to="/favorites" className="btn">Favorites</Link>
        <Link to="/add" className="btn">Create the Beast</Link>
      </div>
    </div>
  );
};

export default Navbar;