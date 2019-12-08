import React, { Component } from "react";

import drinks from "../Assets/images/toast.svg";
import coffee from "../Assets/images/tea-cup.svg";
import sandwich from "../Assets/images/kebabSandwich.svg";
import plate from "../Assets/images/plate.svg";

class OurServices extends Component {
  render() {
    return (
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 py-5 text-center">
              <div className="service-item mx-auto mb-4">
                <img
                  className="img-fluid"
                  src={sandwich}
                  alt="Sandwich Kebab"
                />
              </div>
              <h4 className="text-center text-white">Des sandwichs</h4>
              <p className="pt-2">
                obtenez un meilleur go{String.fromCharCode(251)}t du sandwich
              </p>
            </div>
            <div className="col-sm-12 col-md-3 py-5 text-center">
              <div className="service-item mx-auto mb-4">
                <img className="img-fluid" src={plate} alt="Sandwich Kebab" />
              </div>
              <h4 className="text-center text-white">Des Assietes</h4>
              <p className="pt-2">
                obtenez des assiettes au choix de kebab, poulet etc...
              </p>
            </div>
            <div className="col-sm-12 col-md-3 py-5 text-center">
              <div className="service-item mx-auto mb-4">
                <img className="img-fluid" src={coffee} alt="The ou Cafe" />
              </div>
              <h4 className="text-center text-white">
                Th{String.fromCharCode(233)} et Caf{String.fromCharCode(233)}
              </h4>
              <p className="pt-2">
                Avec la sandwich ou un assiette vous pouvez avois le th
                {String.fromCharCode(233)} ou Caf{String.fromCharCode(233)}{" "}
                gratuit
              </p>
            </div>
            <div className="col-sm-12 col-md-3 py-5 text-center">
              <div className="service-item mx-auto mb-4">
                <img className="img-fluid" src={drinks} alt="Boissons" />
              </div>
              <h4 className="text-center text-white">Des sandwichs</h4>
              <p className="pt-2">
                vous avez le chois des boissons fresh entre coca, coca-zero,
                fanta, etc...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
