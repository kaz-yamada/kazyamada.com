import React from "react";

const UserLinks = ({ labeled, config }) => {
  const { userLinks } = config;

  const getLinkElements = () => {
    return userLinks.map(link => (
      <a
        href={link.url}
        key={link.label}
        className="user-link"
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
  };

  if (!userLinks) {
    return null;
  }

  return <div className="user-links">{getLinkElements()}</div>;
};

export default UserLinks;
