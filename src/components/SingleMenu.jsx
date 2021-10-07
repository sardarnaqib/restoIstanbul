import React from "react";
import styled from "styled-components";

const StyledSingleMenu = styled.div`
    width: 300px;
    min-height: 500px;
    max-height: 600px;
    margin: auto;
    // padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #c0c0c0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    @media (min-width: 360px) and (max-width: 760px) {
        width: 80%;
    }
    @media (min-width: 400px) {
        & > div > div.px-4.pt-4 {
            padding-bottom: 20px !important;
        }
    }
    @media (min-width: 500px) and (max-width: 760px) {
        height: 560px;
    }

    & > div > div {
        position: relative;
    }
    & > div > div.px-4.pt-4 {
        padding-top: 40px !important;
    }
    & > div > div:first-child {
        background-color: rgba(0, 0, 0, 0.1);
        & img {
            display: block;
            margin: auto;
        }
    }
    & .w-100 {
        // border-radius: 5px;
        overflow: hidden;
    }
`;
const Price = styled.span`
    padding: 4px 20px;
    color: #fff;
    background-color: ${(props) => {
        // @ts-ignore
        return props.theme.primaryColor;
    }};
    border-radius: 20px;
    position: absolute;
    bottom: -16px;
    right: 1.5rem;
`;
const Title = styled.h3``;

const SingleMenu = (props) => {
    const { menuTitle, menuPrice, menuImage, menuDescription } = props;

    return (
        <StyledSingleMenu>
            <div className="w-100">
                <div>
                    <img
                        className="img-fluid"
                        src={menuImage}
                        alt={menuTitle}
                    />
                    <Price>{menuPrice}</Price>
                </div>
                <div className="px-4 pt-4">
                    <Title>{menuTitle}</Title>
                    <div>{menuDescription}</div>
                </div>
            </div>
        </StyledSingleMenu>
    );
};

export default SingleMenu;
