import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse justify-content-end" id="kebabNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link text-uppercase text-white"
            to="/"
            activeClassName="active"
            exact
          >
            ACCUEIL <span className="sr-only">(current)</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link text-uppercase text-white"
            to="/menu"
            activeClassName="active"
            exact
          >
            NOTRE MENU
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white" to="/contact">
            CONTACTER NOUS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
