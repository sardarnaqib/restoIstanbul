import React, { Component } from "react";
import styled from "styled-components";

import chevronNext from "../Assets/images/chevron-next.svg";
import chevronPrev from "../Assets/images/chevron-prev.svg";
import sandwichKebab from "../Assets/images/menu-images/sandwichKebab.png";

const Image = styled.div`
    width: 70%;
    margin: auto;
    @media (min-width: 760px) {
        width: 100%;
    }
`;
const Description = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
    & p {
        font-size: 20px;
    }
`;
export const RedButton = styled.div`
    display: inline;
    background-color: ${(props) => {
        // @ts-ignore
        return props.theme.primaryColor;
    }} !important;
    color: #fff !important;
    text-transform: capitalize !important;
    border-radius: 50px !important;
    padding: 8px 30px !important;
    font-size: 18px !important;
    & > * {
        color: #fff !important;
        text-decoration: none;
        text-transform: capetalize;
    }
`;
const StyledCarouselButtons = styled.button`
    width: 80px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${(props) => {
        // @ts-ignore
        return props.theme.secondaryColor;
    }};
    transition: width 0.2s ease-in-out;
    border-radius: 50px;
    &.carousel-control-next {
        right: -20px;
    }
    &.carousel-control-prev {
        left: -20px;
    }
    &.carousel-control-next span {
        left: 25px;
    }
    &.carousel-control-prev span {
        right: 25px;
    }
    &:hover {
        width: 100px;
    }
    & span {
        width: 20px;
        position: absolute;
    }
`;

class Carousel extends Component {
    specialOffers = {
        offers: [
            {
                id: "1",
                title: "Sandwich Gratuit",
                price: 0,
                description:
                    "Avec la carte de fidèlité 10 sanduichs acheter le 11eme gratuit ",
                imageLink: sandwichKebab,
            },
            {
                id: "2",
                title: "Formule Kebab + Boisson",
                price: 7.0,
                description:
                    "Avec la formule kebab vous allez avoir sandwich a kebab + boisson au choix est les frites",
                imageLink: sandwichKebab,
            },
        ],
    };
    render() {
        return (
            <div
                id="offerCarousel"
                className="carousel slide "
                data-bs-ride="carousel"
            >
                <div className="carousel-inner px-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                {this.specialOffers.offers.map((offer) => {
                                    const isPrice = offer.price > 0;
                                    return (
                                        <div
                                            key={offer.id}
                                            className={
                                                "carousel-item " +
                                                (offer.id === "1"
                                                    ? "active"
                                                    : "")
                                            }
                                        >
                                            <div className="mx-4 mt-5">
                                                <RedButton>
                                                    {isPrice
                                                        ? "Juste " +
                                                          offer.price.toFixed(
                                                              2
                                                          ) +
                                                          " €"
                                                        : "Gratuit"}
                                                </RedButton>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <Image>
                                                        <img
                                                            className="d-block w-100 img-fluid"
                                                            src={
                                                                offer.imageLink
                                                            }
                                                            alt="Second slide"
                                                        />
                                                    </Image>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <Description className="py-5">
                                                        <div>
                                                            <h1>
                                                                {offer.title}
                                                            </h1>
                                                            <p>
                                                                {
                                                                    offer.description
                                                                }
                                                            </p>
                                                            <RedButton>
                                                                <a
                                                                    rel="noreferrer"
                                                                    href="https://www.ubereats.com/en-FR/paris/food-delivery/restaurant-istanbul/yqzOvaZ5R-66_Np9OKHolg/b592d7b2-5da5-4a69-9eca-6365c0123fd2/"
                                                                    target="_blank"
                                                                >
                                                                    Commandez
                                                                    maintenant
                                                                </a>
                                                            </RedButton>
                                                        </div>
                                                    </Description>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <StyledCarouselButtons
                        className="carousel-control-prev justify-content-start"
                        data-bs-target="#offerCarousel"
                        type="button"
                        data-bs-slide="prev"
                    >
                        <span aria-hidden="true">
                            <img
                                src={chevronPrev}
                                className="img-fluid"
                                alt=""
                            />
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </StyledCarouselButtons>
                    <StyledCarouselButtons
                        className="carousel-control-next justify-content-end"
                        data-bs-target="#offerCarousel"
                        type="button"
                        data-bs-slide="next"
                    >
                        <span aria-hidden="true">
                            <img
                                src={chevronNext}
                                className="img-fluid"
                                alt=""
                            />
                        </span>
                        <span className="visually-hidden">Next</span>
                    </StyledCarouselButtons>
                </div>
            </div>
        );
    }
}

export default Carousel;
