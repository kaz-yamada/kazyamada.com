import React from "react";

import renderer from "react-test-renderer";

import ProjectListing from "../ProjectListing";

describe("Project Listing", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProjectListing projects={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
