import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        Home
      </Link>

      <Link className="navbar-link" to="/Catalog">
        Catalog
      </Link>
    </div>
  );
};
