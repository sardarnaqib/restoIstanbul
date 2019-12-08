import React from "react";
import { NavLink } from "react-router-dom";

const notFound = () => {
  return (
    <div className="container bottomSpace">
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto ">
          <h1 className="text404 text-center">404</h1>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p className="text-uppercase">
            SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN
            REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
          <NavLink to="/" className="btn btn-custom text-uppercase">
            Go homepage
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default notFound;
