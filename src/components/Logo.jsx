import React from "react";
import logo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledBrandImage = styled.div`
    width: 80px;
`;
const Logo = () => {
    return (
        <Link className="navbar-brand d-flex justify-content-between" to="/">
            <StyledBrandImage className="brand-image">
                <img className="img-fluid" src={logo} alt="Restaurant Turck" />
            </StyledBrandImage>
        </Link>
    );
};

export default Logo;
