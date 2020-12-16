import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery } from "gatsby";
import { render } from "@testing-library/react";

import { siteDescription, siteTitle, siteUrl } from "../../../data/SiteConfig";
import SEO from "../../components/SEO";

describe("SEO", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Kaz Yamada's very average website`,
          description: `A personal website built with Gatsby Advanced Starter.`,
          author: `Kazuki Yamada`,
          siteUrl: `https://kazyamada.com`,
        },
      },
    });
  });
  const nonBlogPostMetaTags = [
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: "og:url",
      content: siteUrl,
    },
  ];

  it("should render correct metadata for home page", () => {
    render(<SEO post />);
    const helmet = Helmet.peek();

    expect(helmet.title).toBe(siteTitle);

    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        {
          name: "description",
          content: siteDescription,
        },
        {
          property: "og:description",
          content: siteDescription,
        },
        {
          property: "og:title",
          content: siteTitle,
        },
        ...nonBlogPostMetaTags,
      ])
    );
  });
});
