import React from "react";
import { createBrowserHistory } from "history";
import watch from "../Assets/images/watch.svg";
import location from "../Assets/images/location.svg";
import MiniHome from "./miniHome";
import OurServices from "./OurServices";
import Menu from "./Menu";
import Carousel from "./Carousel";

const Contact = () => {
  const history = createBrowserHistory();
  if (history.location.pathname === "/contact") {
    return (
      <React.Fragment>
        <MiniHome homeTitle="Contactez Nous" />
        {onlyContact()}
        <OurServices />
        <Carousel />
        <Menu />
      </React.Fragment>
    );
  } else {
    return onlyContact();
  }
};

const onlyContact = () => {
  return (
    <div className="row info">
      <div className="col-lg-6 col-sm-12 d-flex align-items-center bg-black pt-7">
        <div className="w-100">
          <div className="col-md-7 mb-5 col-sm-12 mx-auto">
            <div className="call-us-holder">
              <div className="mb-4">
                <span className="prim-button call-us">Apellez Nous</span>
              </div>
              <h1 className="text-white">09 53 69 37 65</h1>
            </div>
            <div className="d-flex flex-row">
              <div className="watch">
                <img className="img-fluid" src={watch} alt="" />
              </div>
              <div>
                <h5>Lundi au Samedi: 11:00 - 22:30</h5>
                <h5>Dimanche: Fermé</h5>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 mx-auto d-flex flex-row">
            <div className="location">
              <img className="img-fluid" src={location} alt="" />
            </div>
            <div>
              <h5>26 Rue Louis Rouquier, 92300 Levallois-Perret</h5>
            </div>
          </div>

          <div className="text-right mr-5 my-4">
            <small
              style={{
                color: "#fff",
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              ce site est créé par{" "}
              <a
                style={{ textDecoration: "none", color: "#f3705a" }}
                href="https://sardar.dev"
              >
                sardar.dev
              </a>
            </small>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-0 col-sm-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.8369715292016!2d2.2840558292429685!3d48.889705398705644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8664f30dcb%3A0xb0696a9172bdad28!2s26%20Rue%20Louis%20Rouquier%2C%2092300%20Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1573499134486!5m2!1sfr!2sfr"
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen=""
          title="Address Map"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
