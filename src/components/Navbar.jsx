import React, { Component } from "react";

import Nav from "./nav";
import Logo from "./Logo";

class Navbar extends Component {
  state = {
    isTop: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      const nav = document.getElementById("nav");
      if (isTop > 100) {
        this.setState({ isTop: true });
      } else {
        this.setState({ isTop: false });
      }
      if (isTop > 150) {
        nav.classList.add("show");
      } else {
        nav.classList.remove("show");
      }
    });
  }

  render() {
    return (
      <header>
        <nav
          id="nav"
          className={`navbar p-0 navbar-expand-lg ${
            this.state.isTop ? "navbar-fixed" : "bg-transparent"
          }`}
        >
          <div className="container d-flex justify-content-between">
            <Logo />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#kebabNav"
              aria-controls="kebabNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.isClose}
            >
              <span></span>
            </button>
            <Nav />
          </div>
        </nav>
      </header>
    );
  }
  componentWillMount() {
    window.removeEventListener("scroll", () => {});
  }

  isClose = () => {
    document.querySelector(".navbar-toggler").classList.toggle("close");
  };
}

export default Navbar;
