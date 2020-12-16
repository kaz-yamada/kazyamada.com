import React from "react";

import { render } from "@testing-library/react";

import Navigation from "../../components/Navigation";
import config from "../../../data/SiteConfig";

describe("Navigation bar", () => {
  it("renders correctly", () => {
    render(<Navigation config={config} />);
  });
});
