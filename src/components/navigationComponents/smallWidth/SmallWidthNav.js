import React, { Component } from "react";
import "../../../styles/layouts/Navigation.css";

import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import logoLarge from "../../../images/logos/logo1.png";

class SmallWidthNav extends Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const menuItems = this.props.menuList.map((index) => {
      return <MenuItem key={index} />;
    });

    return (
      <>
        <div className="small_nav small_width">
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="#222"
          />
          <div className="nav_logo">
            <img src={logoLarge} alt="mobilna sauna" />
          </div>
        </div>
        <Menu menuList={this.props.menuList} open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </>
    );
  }
}

export default SmallWidthNav;
