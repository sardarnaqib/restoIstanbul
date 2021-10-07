import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import homeBgImage from "../Assets/images/kebab2.jpg";

const StyledMiniHome = styled.div`
    & .mini-home-bg {
        height: 50vh;
        & .home-title {
            display: flex;
            justify-content: center;
            padding-top: 2em;
            & h1 {
                font-size: 50px;
                text-transform: uppercase;
            }
        }
    }
`;

class MiniHome extends Component {
    state = {};
    render() {
        return (
            <StyledMiniHome className="w-100">
                <div
                    className="mini-home-bg"
                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${homeBgImage})`,
                        backgroundPosition: "center",
                    }}
                >
                    <Navbar />
                    <div className="container">
                        <div className="home-title">
                            <h1 className="text-white">
                                {this.props.homeTitle}
                            </h1>
                        </div>
                    </div>
                </div>
            </StyledMiniHome>
        );
    }
}

export default MiniHome;
