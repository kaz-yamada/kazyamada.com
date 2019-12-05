import React, { Component } from "react";

class UserLinks extends Component {
  getLinkElements() {
    const { labeled, config } = this.props;
    const { userLinks } = config;

    return userLinks.map(link => (
      <a
        href={link.url}
        key={link.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {labeled ? (
          <button type="button">{link.label}</button>
        ) : (
          <img
            className="icon"
            src={link.image}
            alt={link.label}
            height="30"
            width="30"
          />
        )}
      </a>
    ));
  }

  render() {
    const { config } = this.props;
    const { userLinks } = config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
