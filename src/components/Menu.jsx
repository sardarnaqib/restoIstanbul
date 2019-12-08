import React, { Component } from "react";
import SingleMenu from "./SingleMenu";
import { createBrowserHistory } from "history";

import assietteKebab from "../Assets/images/menu-images/assiette-kebab.jpg";
import assietteAdana from "../Assets/images/menu-images/Assiette-Adana.png";
import assietteKefta from "../Assets/images/menu-images/assiette-kefta.png";
import brochettePoulet from "../Assets/images/menu-images/assiette-brochette-poulet.jpg";
import assietteSteak from "../Assets/images/menu-images/Assiette-Steack.png";
import assietteMerguez from "../Assets/images/menu-images/Assiette-Merguez.png";
import assietteTikkaChika from "../Assets/images/menu-images/assiette-chicken-chika.jpg";
import assiettecotelettes from "../Assets/images/menu-images/assiette-cotelettes.png";
import assietteMix from "../Assets/images/menu-images/assiette-grillade-mixte.jpg";

// Sandwich images
import sandwichKebab from "../Assets/images/menu-images/sandwich-kebab.jpg";
import sandwichBrochettePoulet from "../Assets/images/menu-images/sandwich-brochettes-poulet.jpg";
import sandwichKefta from "../Assets/images/menu-images/sandwich-kefta.png";
import sandwichAdana from "../Assets/images/menu-images/sandwich-adana.png";
import sandwichSpecial from "../Assets/images/menu-images/sandwich-special.jpg";
import sandwichChikenChika from "../Assets/images/menu-images/sandwich-chicken-chika.jpg";
import sandwichSteackFromage from "../Assets/images/menu-images/sandwich-steack-fromage.jpg";
import sandwichMerguez from "../Assets/images/menu-images/sandwich-merguez.jpg";
import sandwichBrochetteAgneau from "../Assets/images/menu-images/sandwich-brochettes-agneau.png";
import cheeseburger from "../Assets/images/menu-images/cheeseburger.jpg";

import OurServices from "./OurServices";
import Carousel from "./Carousel";
import MiniHome from "./miniHome";
import Contact from "./Contact";

class Menu extends Component {
  history = createBrowserHistory();
  state = {
    assiettes: [
      {
        id: "1",
        menuTitle: "Assiette Kebab",
        menuPrice: "9.00",
        menuImage: assietteKebab,
        menuDescription: "Assiette a kebab avec les frites, salade et bles"
      },
      {
        id: "2",
        menuTitle: "Assiette Adana",
        menuPrice: "9.00",
        menuImage: assietteAdana,
        menuDescription: "Assiette adana avec les frites, salade et bles"
      },
      {
        id: "3",
        menuTitle: "Assiette Kefta",
        menuPrice: "9.00",
        menuImage: assietteKefta,
        menuDescription: "Assiette Kefta avec les frites, salade et bles"
      },
      {
        id: "4",
        menuTitle: "Assiette Brochette de poulet",
        menuPrice: "9.00",
        menuImage: brochettePoulet,
        menuDescription:
          "Assiette Brochette de poulet avec les frites, salade et bles"
      },
      {
        id: "5",
        menuTitle: "Assiette Steak",
        menuPrice: "9.00",
        menuImage: assietteSteak,
        menuDescription: "Assiette Steak avec les frites, salade et bles"
      },
      {
        id: "6",
        menuTitle: "Assiette Merguez",
        menuPrice: "9.00",
        menuImage: assietteMerguez,
        menuDescription: "Assiette Merguez avec les frites, salade et bles"
      },
      {
        id: "7",
        menuTitle: "Assiette chicken Chika",
        menuPrice: "9.00",
        menuImage: assietteTikkaChika,
        menuDescription:
          "Assiette chicken Chika avec les frites, salade et bles"
      },
      {
        id: "9",
        menuTitle: "Assiette Brochette d'agneau",
        menuPrice: "10.00",
        menuImage: brochettePoulet,
        menuDescription:
          "Assiette Brochette d'agneau avec les frites, salade et bles"
      },
      {
        id: "10",
        menuTitle: "Assiette C" + String.fromCharCode(244) + "telettes",
        menuPrice: "10.00",
        menuImage: assiettecotelettes,
        menuDescription:
          "Assiette Brochette C" +
          String.fromCharCode(244) +
          "telettes avec les frites, salade et bles"
      },
      {
        id: "11",
        menuTitle: "Assiette Grillade Mixte",
        menuPrice: "12.00",
        menuImage: assietteMix,
        menuDescription: "Assiette Mixte avec les frites, salade et bles"
      }
    ],
    sandwichs: [
      {
        id: "1",
        menuTitle: "Sandwich Kebab + Frites",
        menuPrice: "6.00",
        menuImage: sandwichKebab,
        menuDescription:
          "Sandwich Kebab pain de choix gallette ou pas normal  + Frites"
      },
      {
        id: "2",
        menuTitle: "Sandwich Brochette de poulet",
        menuPrice: "6.00",
        menuImage: sandwichBrochettePoulet,
        menuDescription:
          "Sandwich Brochette poulet pain de choix gallette ou pas normal  + Frites"
      },
      {
        id: "3",
        menuTitle: "Sandwich Kefta",
        menuPrice: "6.00",
        menuImage: sandwichKefta,
        menuDescription:
          "Sandwich Kefta pain de choix gallette ou pas normal  + Frites"
      },
      {
        id: "4",
        menuTitle: "Sandwich Adana",
        menuPrice: "6.00",
        menuImage: sandwichAdana,
        menuDescription:
          "Sandwich Kefta pain de choix gallette ou pas normal  + Frites"
      },
      {
        id: "5",
        menuTitle: "Sandwich sp" + String.fromCharCode(233) + "cial",
        menuPrice: "6.00",
        menuImage: sandwichSpecial,
        menuDescription:
          "Sandwich sp" +
          String.fromCharCode(233) +
          "cial pain de choix gallette ou pas normal  + Frites"
      },
      {
        id: "6",
        menuTitle: "Sandwich Chicken Chika",
        menuPrice: "6.00",
        menuImage: sandwichChikenChika,
        menuDescription:
          "Sandwich chiken chika pain de choix gallette ou pas normal  + frites"
      },
      {
        id: "7",
        menuTitle: "Sandwich steack fromage",
        menuPrice: "6.00",
        menuImage: sandwichSteackFromage,
        menuDescription:
          "Sandwich steack fromage pain de choix gallette ou pas normal  + frites"
      },
      {
        id: "8",
        menuTitle: "Sandwich Brochettes d'agneau",
        menuPrice: "6.00",
        menuImage: sandwichBrochetteAgneau,
        menuDescription:
          "Sandwich brochettes d'agneau pain de choix gallette ou pas normal  + frites"
      },
      {
        id: "9",
        menuTitle: "Sandwich Merguez",
        menuPrice: "6.00",
        menuImage: sandwichMerguez,
        menuDescription:
          "Sandwich merguez pain de choix gallette ou pas normal  + frites"
      },
      {
        id: "10",
        menuTitle: "Cheeseburger",
        menuPrice: "3.50",
        menuImage: cheeseburger,
        menuDescription: "Cheeseburger sans frites, avec frites 4.50 Euro"
      }
    ]
  };

  render() {
    const history = createBrowserHistory();
    if (history.location.pathname === "/menu") {
      return (
        <React.Fragment>
          <MiniHome homeTitle="Notre Menu" />
          {this.OnlyMenu()}
          <OurServices />
          <Carousel />
          <Contact />
        </React.Fragment>
      );
    } else {
      return this.OnlyMenu();
    }
  }

  OnlyMenu() {
    return (
      <div className="menu">
        <div className="container py-5">
          <div className="text-center">
            <div className="text-white pb-4">
              <h4 className="btn menu-button text-white bg-prim text-uppercase">
                d{String.fromCharCode(233)}licieux et savoureux
              </h4>
              <h1 className="display-4">Nos Assiettes</h1>
            </div>
          </div>
          <div className="row">
            {this.state.assiettes.map(menu => (
              <div key={menu.id} className="col-lg-6 col-sm-12 px-3 pb-3">
                <div className="each-menu">
                  <SingleMenu
                    menuTitle={menu.menuTitle}
                    menuImage={menu.menuImage}
                    menuPrice={menu.menuPrice + " €"}
                    menuDescription={menu.menuDescription}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-white pb-4">
              <h1 className="display-4">Nos Sandwichs</h1>
            </div>
          </div>
          <div className="row">
            {this.state.sandwichs.map(menu => (
              <div key={menu.id} className="col-lg-6 col-sm-12 px-3 pb-3">
                <div className="each-menu">
                  <SingleMenu
                    menuTitle={menu.menuTitle}
                    menuImage={menu.menuImage}
                    menuPrice={menu.menuPrice + " €"}
                    menuDescription={menu.menuDescription}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
