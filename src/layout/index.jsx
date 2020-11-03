import React, { useContext } from "react";
import Helmet from "react-helmet";

import ThemeContext from "../context/ThemeContext";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";

import "../style/main.scss";

export default (props) => {
  const { children, LocalTitle } = props;

  const { state } = useContext(ThemeContext);
  const { theme } = state;

  return (
    <div className={`index-layout theme-${theme}`}>
      <Navigation config={config} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className="main-content side-gutter">{children}</div>
      <Footer config={config} userLinks={LocalTitle} />
    </div>
  );
};
