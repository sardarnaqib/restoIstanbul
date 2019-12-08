import React from "react";
import logo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand d-flex justify-content-between" to="/">
      <div className="brand-image">
        <img className="img-fluid" src={logo} alt="Restaurant Turck" />
      </div>
      <div className="brand-name d-flex flex-column justify-content-center ml-2">
        <h4 className="text-uppercase m-0 text-white">Restaurant</h4>
        <h4 className="text-uppercase m-0 text-white">Istanbul</h4>
        {/* <p className="m-0 text-white">spécialité turque</p> */}
      </div>
    </Link>
  );
};

export default Logo;
