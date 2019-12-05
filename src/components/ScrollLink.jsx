import React from "react";

import { Link } from "gatsby";
import { performScroll } from "../utils/functions";

const ScrollLink = props => {
  const { to, children } = props;
  const element = document.getElementById(to.substring(2));

  return (
    <Link to={to} onClick={performScroll(element)}>
      {children}
    </Link>
  );
};

export default ScrollLink;
