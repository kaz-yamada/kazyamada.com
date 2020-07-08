/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Helmet from "react-helmet";

import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class notFoundPage extends Component {
  render() {
    return (
      <Layout>
        <div className="front-page">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="post-header">
            <div className="header-background" />
            <div className="title">
              <h1>404</h1>
            </div>
          </div>
          <div className="index-container">
            <div className="vertical-margin">
              <h2>Something went wrong</h2>
              <p>This is not the page you are looking for. Or maybe you are, but anyway the page you are looking for doesn't exist</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default notFoundPage;
