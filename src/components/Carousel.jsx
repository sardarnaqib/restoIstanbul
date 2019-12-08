import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import chevronNext from "../Assets/images/chevron-next.svg";
import chevronPrev from "../Assets/images/chevron-prev.svg";
import sandwichKebab from "../Assets/images/menu-images/sandwichKebab.png";

class Carousel extends Component {
  specialOffers = {
    offers: [
      {
        id: "1",
        title: "Sandwich Gratuit",
        price: 0,
        description:
          "Avec la carte de fidèlité 10 sanduichs acheter le 11eme gratuit ",
        imageLink: sandwichKebab
      },
      {
        id: "2",
        title: "Formule Kebab + Boisson",
        price: 7.0,
        description:
          "Avec la formule kebab vous allez avoir sandwich a kebab + boisson au choix est les frites",
        imageLink: sandwichKebab
      }
    ]
  };
  render() {
    return (
      <div id="offerCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 p-0">
                {this.specialOffers.offers.map(offer => {
                  const isPrice = offer.price > 0;
                  return (
                    <div
                      key={offer.id}
                      className={
                        "carousel-item " + (offer.id === "1" ? "active" : "")
                      }
                    >
                      <div className="row">
                        <div className="d-none my-4">
                          <h6 className="prim-button font-weight-bold text-uppercase d-inline-block ml-auto">
                            {isPrice
                              ? "Juste " + offer.price.toFixed(2) + " €"
                              : "Gratuit"}
                          </h6>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <img
                            className="d-block w-100 img-fluid"
                            src={offer.imageLink}
                            alt="Second slide"
                          />
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="text-white text-center">
                            <div className="price d-flex my-4">
                              <h6 className="prim-button font-weight-bold text-uppercase d-inline-block ml-auto">
                                {isPrice
                                  ? "Juste " + offer.price.toFixed(2) + " €"
                                  : "Gratuit"}
                              </h6>
                            </div>
                            <div className="my-4">
                              <h1
                                className={
                                  isPrice
                                    ? "my-4 text-uppercase"
                                    : "my-4 text-uppercase offer-title"
                                }
                              >
                                {offer.title}
                              </h1>
                              <p className="my-4 text-secondary">
                                {offer.description}
                              </p>
                              <NavLink
                                to=""
                                className="my-5 btn menu-button text-uppercase"
                              >
                                Commandez maintenant
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev justify-content-start"
            href="#offerCarousel"
            role="button"
            data-slide="prev"
          >
            <span aria-hidden="true">
              <img src={chevronPrev} className="img-fluid" alt="" />
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next justify-content-end"
            href="#offerCarousel"
            role="button"
            data-slide="next"
          >
            <span aria-hidden="true">
              <img src={chevronNext} className="img-fluid" alt="" />
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
