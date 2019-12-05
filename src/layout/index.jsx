import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";

import "../style/main.scss";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

export default class MainLayout extends React.Component {
  render() {
    const { children, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    return (
      <div className="index-layout backround-light">
        <Navigation config={config} />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className="main-content side-gutter">{children}</div>
        <Footer config={config} userLinks={footerLinks} />
      </div>
    );
  }
}
