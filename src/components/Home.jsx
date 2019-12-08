import React, { Component } from "react";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";
import Menu from "./Menu";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Contact from "./Contact";

class Home extends Component {
  static defaultProps = {
    title: "chez nous vous trouvez le meilleur goût",
    style: ""
  };

  render() {
    return (
      <div className="w-100">
        <div className="bg-image bottomSpace">
          <Navbar />
          <div className="container text-center text-white">
            <div className="home-text">
              <p>
                vous pouvez trouver le meuilleur gout du kebab doner artisanal
                au restaurant Istanbul Sp{String.fromCharCode(233)}cialit
                {String.fromCharCode(233)}s Turques
              </p>
              <Link className="btn menu-button" to="/menu">
                <span className="text-uppercase">Notre Menu</span>
              </Link>
            </div>
          </div>
        </div>
        <OurServices />
        <Menu />
        <Carousel />
        <Contact />
      </div>
    );
  }
  componentWillUnmount() {}
}

export default Home;
