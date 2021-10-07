import React from "react";

import drinks from "../Assets/images/toast.svg";
import coffee from "../Assets/images/tea-cup.svg";
import sandwich from "../Assets/images/kebabSandwich.svg";
import plate from "../Assets/images/plate.svg";
import styled from "styled-components";

const StyledService = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    & .service-item {
        width: 100px;
        min-height: 100px;
    }
    @media (min-width: 360px) and (max-width: 766px) {
        .py-5 {
            padding-top: 2rem !important;
            padding-bottom: 0 !important;
        }
    }
    @media (min-width: 360px) and (max-width: 576px) {
        .row > div {
            padding-left: 5rem !important;
            padding-right: 5rem !important;
        }
    }
`;

const OurServices = () => {
    return (
        <StyledService>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 py-5 text-center">
                        <div className="service-item mx-auto mb-4">
                            <img
                                className="img-fluid"
                                src={sandwich}
                                alt="Sandwich Kebab"
                            />
                        </div>
                        <h4 className="text-center text-white">
                            Des sandwichs
                        </h4>
                        <p className="pt-2">
                            obtenez un meilleur go{String.fromCharCode(251)}t du
                            sandwich
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 py-5 text-center">
                        <div className="service-item mx-auto mb-4">
                            <img
                                className="img-fluid"
                                src={plate}
                                alt="Sandwich Kebab"
                            />
                        </div>
                        <h4 className="text-center text-white">Des Assietes</h4>
                        <p className="pt-2">
                            obtenez des assiettes au choix de kebab, poulet
                            etc...
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 py-5 text-center">
                        <div className="service-item mx-auto mb-4">
                            <img
                                className="img-fluid"
                                src={coffee}
                                alt="The ou Cafe"
                            />
                        </div>
                        <h4 className="text-center text-white">
                            Th{String.fromCharCode(233)} et Caf
                            {String.fromCharCode(233)}
                        </h4>
                        <p className="pt-2">
                            Avec la sandwich ou un assiette vous pouvez avois le
                            th
                            {String.fromCharCode(233)} ou Caf
                            {String.fromCharCode(233)} gratuit
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 py-5 text-center">
                        <div className="service-item mx-auto mb-4">
                            <img
                                className="img-fluid"
                                src={drinks}
                                alt="Boissons"
                            />
                        </div>
                        <h4 className="text-center text-white">
                            Des sandwichs
                        </h4>
                        <p className="pt-2">
                            vous avez le chois des boissons fresh entre coca,
                            coca-zero, fanta, etc...
                        </p>
                    </div>
                </div>
            </div>
        </StyledService>
    );
};

export default OurServices;
