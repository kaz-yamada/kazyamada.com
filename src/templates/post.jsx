import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formattedDate } from "../utils/functions";

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark: postNode } = data;
  const { frontmatter } = postNode;
  const { slug } = pageContext;

  const { imageCredit } = frontmatter;

  const getThumbnail = (featuredImage) =>
    featuredImage ? featuredImage.childImageSharp.fixed : "";

  const date = formattedDate(frontmatter.date);
  const image = getThumbnail(frontmatter.featuredImage);

  if (!frontmatter.id) frontmatter.id = slug;

  if (!frontmatter.category_id) {
    frontmatter.category_id = config.postDefaultCategoryID;
  }

  return (
    <Layout>
      <div className="post template-post side-gutter">
        <Helmet>
          <title>{`${frontmatter.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post-header">
          <div className="header-background" />
          <div className="header-contents container">
            {image ? <Img fixed={image} className="thumbnail" /> : <div />}
            <div className="title-bar">
              <div className="title">
                <h1>{frontmatter.title}</h1>
              </div>
              <div className="post-date">
                <h3>{date}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="post-meta vertical-gutter container">
          {imageCredit && <div className="image-credit">{imageCredit}</div>}
          {frontmatter.tags && (
            <div className="post-tags">
              <span className="label">Tags: </span>
              <PostTags tags={frontmatter.tags} />
            </div>
          )}
        </div>
        <div className="post-body container">
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <UserInfo config={config} />
        </div>
      </div>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        imageCredit
        featuredImage {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;

export default PostTemplate;
