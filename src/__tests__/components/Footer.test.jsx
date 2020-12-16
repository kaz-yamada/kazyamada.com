import React from "react";
import { render } from "@testing-library/react";

import Footer from "../../components/Footer";
import config from "../../../data/SiteConfig";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer config={config} />);
  });
});
