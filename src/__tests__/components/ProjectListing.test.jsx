import React from "react";

import { render } from "@testing-library/react";

import ProjectListing from "../../components/ProjectListing";

describe("Project Listing", () => {
  it("Renders a project with source and no demo link", () => {
    const projectList = [
      {
        title: "Project title",
        source: "github.com",
        description: "A project description",
      },
      {
        title: "Project title two",
        source: "github.com/kazyamada.com",
        path: "kazyamada.com",
        description: "A project description",
      },
    ];

    render(<ProjectListing projects={projectList} />);
  });
});
