import React, { Component } from "react";
import Navbar from "./Navbar";

class MiniHome extends Component {
  state = {};
  render() {
    return (
      <div className="w-100">
        <div className="mini-home-bg">
          <Navbar />
          <div className="container">
            <div className="home-title">
              <h1 className="text-white">{this.props.homeTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniHome;
