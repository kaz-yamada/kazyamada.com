import React, { useContext } from "react";
import Helmet from "react-helmet";

import ThemeProvider, { ThemeContext } from "../context/ThemeContext";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";

import "../style/main.scss";

const Layout = (props) => {
  const { children, LocalTitle } = props;
  const [isDarkMode] = useContext(ThemeContext);

  return (
    <div className={`index-layout theme-${isDarkMode ? "dark" : "light"}`}>
      <Navigation config={config} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className="main-content side-gutter">{children}</div>
      <Footer config={config} userLinks={LocalTitle} />
    </div>
  );
};

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
