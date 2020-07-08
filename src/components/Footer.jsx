import React from "react";

import UserLinks from "./UserLinks";

const Footer = props => {
  const { config } = props;
  return (
    <footer className="footer">
      <div className="row">
        <div className="medium-6">
          <span>
            {"A GatsbyJs site based on "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter.
            </a>
          </span>
        </div>
        <div className="medium-6">
          <div className="footer-links">
            <UserLinks config={config} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
