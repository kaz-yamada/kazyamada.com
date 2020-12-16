import React from "react";

import { render } from "@testing-library/react";

// import { StaticQuery } from "gatsby"; // mocked
import Layout from "../../layout/index";

describe(`Layout`, () => {
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
