import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "../../content/images/kaz.jpg";

const SEO = ({ description, title, slug, isPost = false }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  const { siteMetadata } = site;

  const slugWithoutSlashes = () => (isPost ? slug.replace(/\//g, "") : slug);

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s · ${siteMetadata.title}`}
      defaultTitle={siteMetadata.title}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: "og:description",
          content: description || site.siteMetadata.description,
        },
        {
          property: "og:url",
          content: slug
            ? `${site.siteMetadata.siteUrl}/${slugWithoutSlashes()}/`
            : site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
      link={[
        {
          rel: "shortcut icon",
          type: "image/jpg",
          href: `${favicon}`,
        },
      ]}
    />
  );
};

export default SEO;
