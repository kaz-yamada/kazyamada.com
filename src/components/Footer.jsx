import React from "react";

import githubIcon from "../assets/images/GitHub-Mark-64px.png";
import UserLinks from "./UserLinks";

const Footer = props => {
  const { config } = props;
  return (
    <footer className="footer">
      <div className="row">
        <div className="medium-6">
          <h4>
            {"A GatsbyJs site based on "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter.
            </a>
          </h4>
        </div>
        <div className="medium-6">
          <div className="footer-links">
            {/* <a href="https://github.com/kaz-yamada">
              <img src={githubIcon} height="20" width="20" alt="GitHub" />
            </a> */}
            <UserLinks config={config} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
