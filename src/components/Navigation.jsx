import React, { Component } from "react";

import { Link } from "gatsby";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      menuClass: "",
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      const menuClass = prevState.showMenu ? "" : "show-menu";

      return { showMenu: !prevState.showMenu, menuClass };
    });
  };

  onMenuButtonClick = (e) => {
    e.preventDefault();
    this.toggleMenu();
  };

  hideMenu = () => {
    this.setState({ showMenu: false, menuClass: "" });
  };

  render() {
    const { config } = this.props;
    const { menuClass } = this.state;
    const { menuLinks } = config;

    return (
      <nav className={`main-navigation ${menuClass}`}>
        <button
          id="menu-button"
          className="menu-button"
          type="button"
          onClick={this.onMenuButtonClick}
        >
          <div className="menu-icon" />
        </button>
        <div className="navbar">
          <div className="nav-title">
            <Link className="menu-link" activeClassName="active" to="/#">
              {config.siteTitleShort}
            </Link>
          </div>
          <div className="menu-item">
            {menuLinks.map((item) => {
              return (
                <Link
                  className="menu-link"
                  activeClassName="active"
                  key={item.name}
                  to={item.link}
                  onClick={this.hideMenu}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}
