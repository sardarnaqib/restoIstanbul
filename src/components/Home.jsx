import React from "react";
import OurServices from "./OurServices";
import Menu from "./Menu";
import Carousel from "./Carousel";
import Navbar, { Phone, UberEats } from "./Navbar";
import Contact from "./Contact";
import styled from "styled-components";
import homeBgImage from "../Assets/images/kebab2.jpg";

const StyledHome = styled.div`
    height: 100vh;
    & .home-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        margin: auto;

        p {
            margin-bottom: 30px;
            font-size: 25px;
        }
    }
    @media (min-width: 660px) {
        .home-text {
            width: 600px;
        }
    }
`;
export const SmallScreen = styled.div`
    display: none;
    padding: 20px;
    // background: rgba(255, 255, 255, 0.2);
    background: #eee;
    flex-direction: flex-row;
    justify-content: space-between;
    border-radius: 10px;
    & > * {
        color: #000;
    }
    @media (min-width: 360px) and (max-width: 990px) {
        display: flex;
    }
`;
const Home = () => {
    return (
        <div className="w-100">
            <StyledHome
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${homeBgImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="bg-image bottomSpace"
            >
                <Navbar />
                <div className="container text-center text-white">
                    <SmallScreen>
                        <UberEats />
                        <Phone />
                    </SmallScreen>
                    <div className="home-text">
                        <p>
                            vous pouvez trouver le meuilleur gout du kebab doner
                            artisanal au restaurant Istanbul Sp
                            {String.fromCharCode(233)}cialit
                            {String.fromCharCode(233)}s Turques
                        </p>
                    </div>
                </div>
            </StyledHome>
            <OurServices />
            <Menu />
            <Carousel />
            <Contact />
        </div>
    );
};

export default Home;
