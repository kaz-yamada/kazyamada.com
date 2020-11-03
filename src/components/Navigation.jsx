import React, { useState, useContext } from "react";
import { Link } from "gatsby";

import ThemeContext from "../context/ThemeContext";
import { toggleTheme } from "../context/ThemeContext/actions";

const Navigation = ({ config }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const { state, dispatch } = useContext(ThemeContext);
  const { theme } = state;

  const onMenuButtonClick = (e) => {
    e.preventDefault();
    setMenuClass(showMenu ? "" : "show-menu");
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
    setMenuClass("");
  };

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const { menuLinks } = config;

  return (
    <nav className={`main-navigation ${menuClass}`}>
      <button
        id="menu-button"
        className="menu-button"
        type="button"
        onClick={onMenuButtonClick}
      >
        <div className="menu-icon" />
      </button>
      <div className="navbar">
        <div className="nav-title">
          <Link
            className="menu-link"
            activeClassName="active"
            onClick={hideMenu}
            to="/#"
          >
            {config.siteTitleShort}
          </Link>
        </div>
        <div className="menu-right">
          <div className="menu-links">
            {menuLinks.map((item) => {
              return (
                <Link
                  className="menu-link"
                  activeClassName="active"
                  key={item.name}
                  to={item.link}
                  onClick={hideMenu}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="theme-toggle">
            <button type="button" onClick={toggleDarkMode}>
              <span>{theme === "dark" ? "🌅" : "🌙"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
