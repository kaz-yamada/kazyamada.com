import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

const Blog = props => {
  const { data } = props;
  // const postEdges = this.props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="blog">
        <Helmet title={config.siteTitle} />
        <SEO />
        <div className="post-header">
          <div className="thumbbail-container" />
          <div className="title">
            <h1>Blog</h1>
          </div>
        </div>
        <PostListing postEdges={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            featuredImage {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
