import React, { Component } from "react";

class SingleMenu extends Component {
  render() {
    const { menuTitle, menuPrice, menuImage, menuDescription } = this.props;

    return (
      <div className="row">
        <div className="col-menu-img col-sm-4 pr-4 pl-0">
          <div className="menu-img">
            <img className="img-fluid" src={menuImage} alt={menuTitle} />
          </div>
        </div>
        <div className="menu-desc col-sm-8 p-0 d-flex flex-column justify-content-center">
          <h4>{menuTitle}</h4>
          <p>{menuDescription}</p>
          <h4>{menuPrice}</h4>
        </div>
      </div>
    );
  }
}

export default SingleMenu;
