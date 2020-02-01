import React from "react";

import { render } from "@testing-library/react";

// import { StaticQuery } from "gatsby"; // mocked
import Layout from "../index";

describe(`Layout`, () => {
  it(`renders a navbar`, () => {
    const { container } = render(
      <Layout>
        <main>
          <h1>hello</h1>
        </main>
      </Layout>
    );

    expect(container.querySelector(`nav`)).toBeInTheDocument();
  });

  it(`renders children`, () => {
    const text = `__Hello world__`;
    const { getByText } = render(
      <Layout>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
