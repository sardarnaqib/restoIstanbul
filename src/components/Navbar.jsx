import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import navLines from "../Assets/images/nav-lines.svg";
import navClose from "../Assets/images/close.svg";
import Ubereats from "../Assets/images/uber-eats.svg";
import phoneIcon from "../Assets/images/phone-504.svg";

const StyledNav = styled.nav`
    background-color: ${(props) => {
        // @ts-ignore
        return props.theme.secondaryColor;
    }};
    @media (min-width: 360px) and (max-width: 990px) {
        & > div > .navbar-collapse.show {
            right: 0px;
            transition: all 0.2s ease-in-out;
        }
        & > div > .navbar-collapse {
            position: absolute;
            top: 0;
            right: -300px;
            transition: all 0.2s ease-in-out;
            width: 300px;
            height: 100vh;
            background-color: ${(props) => {
                // @ts-ignore
                return props.theme.secondaryColor;
            }};
            border-left: 2px solid #fff;
            z-index: 50;

            ul {
                margin-top: 80px;
            }
        }
    }
    & .nav-item .nav-link.active {
        color: ${(props) => {
            // @ts-ignore
            return props.theme.primaryColor;
        }} !important;
        font-weight: bold;
    }

    & > div > .navbar-toggler {
        padding: 0;
        border: none;
        margin-right: 10px;
        &:focus {
            outline: none;
        }
        & span {
            content: url(${navLines});
            transition: all 0.3s ease-in-out;
        }
        &.close {
            position: absolute;
            right: 10px;
            z-index: 100;
            &:focus {
                outline: none;
            }
            span {
                content: url(${navClose});
                transition: all 0.3s ease-in-out;
            }
        }
    }
    & .collapse.show {
        & .nav-item .nav-link {
            color: #000 !important;
        }
        & .nav-item .nav-link.active {
            color: ${(props) => {
                // @ts-ignore
                return props.theme.primaryColor;
            }} !important;
            font-weight: bold;
        }
    }
    & .nav-item {
        padding: 10px 15px;
        & .nav-link {
            font-size: 18px;
            padding: 0;
            color: #000 !important;
            @media (max-width: 990px) {
                margin: 10px 0;
            }
        }
    }
`;

export const StyledEatsLogo = styled.div`
    width: 100px;
    height: 27px;
    overflow: hidden;
`;

export const UberEats = () => {
    return (
        <StyledEatsLogo>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ubereats.com/en-FR/paris/food-delivery/restaurant-istanbul/yqzOvaZ5R-66_Np9OKHolg/b592d7b2-5da5-4a69-9eca-6365c0123fd2/"
            >
                <img className="img-fluid" src={Ubereats} alt="Uber Eats" />
            </a>
        </StyledEatsLogo>
    );
};

const Navbar = () => {
    const isClose = () => {
        let navbarToggler = document.querySelector(".navbar-toggler");
        if (!navbarToggler.classList.contains("close")) {
            setTimeout(() => {
                navbarToggler.classList.add("close");
            }, 500);
        } else {
            navbarToggler.classList.remove("close");
        }
    };
    const scrollToTop = (match) => {
        if (!match) {
            return false;
        }
        window.scroll(0, 0);
        return true;
    };
    return (
        <header
            style={{
                position: "relative",
                height: "100px",
            }}
        >
            <StyledNav
                id="nav"
                className={`navbar p-0 navbar-expand-lg fixed-top`}
            >
                <div className="container d-flex justify-content-between">
                    <Logo />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#kebabNav"
                        aria-controls="kebabNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#kebabNav"
                        onClick={isClose}
                    >
                        <span></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="kebabNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase text-white"
                                    isActive={scrollToTop}
                                    to="/"
                                    exact
                                >
                                    ACCUEIL
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    isActive={scrollToTop}
                                    className="nav-link text-uppercase text-white"
                                    to="/menu"
                                >
                                    NOTRE MENU
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    isActive={scrollToTop}
                                    className="nav-link text-uppercase text-white"
                                    to="/contact"
                                >
                                    ADDRESSE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <UberEats />
                            </li>
                            <li className="nav-item">
                                <Phone />
                            </li>
                        </ul>
                    </div>
                </div>
            </StyledNav>
        </header>
    );
};
const StyledPhone = styled.div`
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    & img {
        width: 20px;
        height: 20px;
    }
    & span {
        line-height: 30px;
    }
`;
export const Phone = () => {
    return (
        <StyledPhone>
            <img src={phoneIcon} alt="" />
            <span>09 53 69 37 65</span>
        </StyledPhone>
    );
};

export default Navbar;
