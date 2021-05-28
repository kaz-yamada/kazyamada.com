import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import ThemeContext, { initialState } from "../context/ThemeContext"
import { toggleTheme } from "../context/ThemeContext/actions"

const Navigation = ({ config }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [menuClass, setMenuClass] = useState("")

  const { state = initialState, dispatch } = useContext(ThemeContext)
  const { theme } = state

  const onMenuButtonClick = e => {
    e.preventDefault()
    setMenuClass(showMenu ? "" : "show-menu")
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
    setMenuClass("")
  }

  const toggleDarkMode = () => {
    dispatch(toggleTheme())
  }

  const { menuLinks } = config

  return (
    <nav className={`main-navigation ${menuClass}`} data-testid="nav-root">
      <button
        id="menu-button"
        className="menu-button"
        type="button"
        onClick={onMenuButtonClick}
        data-testid="responsive-toggle"
      >
        <div className="menu-icon">
          <span className="hidden">Menu</span>
        </div>
      </button>
      <div className="navbar container">
        <div className="nav-title">
          <Link
            className="menu-link underline-hover"
            activeClassName="active"
            onClick={hideMenu}
            to="/#"
          >
            {config.siteTitleShort}
          </Link>
        </div>
        <div className="menu-right">
          <div className="menu-links">
            {menuLinks.map(item => (
              <Link
                className="menu-link underline-hover"
                activeClassName="active"
                key={item.name}
                to={item.link}
                onClick={hideMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="theme-toggle">
            <button
              type="button"
              onClick={toggleDarkMode}
              data-testid="theme-toggle"
            >
              <span>{theme === "dark" ? "🌅" : "🌙"}</span>
              <span className="hidden">
                Dark Theme: {theme === "dark" ? "On" : "Off"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
