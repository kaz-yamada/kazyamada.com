import React from "react";

import renderer from "react-test-renderer";

import Navigation from "../Navigation";
import config from "../../../data/SiteConfig";

describe("Navigation bar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navigation config={config} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
