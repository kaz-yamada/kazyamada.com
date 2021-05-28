import React from "react";

import UserLinks from "./UserLinks";

const Footer = (props) => {
  const { config } = props;
  return (
    <footer className="footer">
      <div className="container">
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
